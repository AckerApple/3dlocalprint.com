import {
  tag,
  h1,
  p,
  section,
  div,
  button,
  h2,
  select,
  option,
  main,
  header,
  a,
} from "taggedjs";
import { InventoryRow } from "./inventoryRow.tag.js";
import {
  editingTarget,
  toggleRowEdit,
  setEditingIndex,
} from "./filamentDisplayFunctions.js";
import { AdminNav } from "./AdminNav.tag.js";
import { locations } from "./locations.array.js";
import {
  loadFilamentInventory,
  loadFilamentTypes,
  saveFilamentInventory,
} from "./firebase.js";
import { slugifyLocation } from "./location-utils.js";
import { matchesLocationFilter } from "./filter-utils.js";
import { describeFilamentType } from "./filament-match-utils.js";

export const FilamentInventoryApp = tag(
  (
    onSignOut,
    user,
  ) => {
    FilamentInventoryApp.updates((args) => {
      [
        onSignOut,
        user,
      ] = args;
    });

    let data = [];
    let filamentTypes = [];
    let hasLoaded = false;
    let isLoading = false;
    let loadError = "";
    let typesLoaded = false;
    let typesLoading = false;
    let typesError = "";

    const addFilament = () => {
      data.unshift(createEmptyInventoryItem(locations[0] || "", filamentTypes));
      setEditingIndex(0, data[0]?.location || "");
    };

    const saveCurrentFilaments = () => {
      return tag.promise = saveFilamentInventoryToFirestore(data).then(() => {
        delete editingTarget.index
      })
    };

    const duplicateFilamentAt = (index) => {
      const source = data[index];
      if (!source) return;
      const clone = {
        ...source,
        location: source.location || locations[0] || "",
      };
      data.splice(index + 1, 0, clone);
      setEditingIndex(index + 1, clone.location || "");
    };

    let locationFilter = "";
    let filamentTypeFilter = "";
    const unassignedLocation = "__unassigned__";
    const unassignedLabel = "Unassigned";

    const filteredData = () =>
      filterFilamentInventory(data, filamentTypes, {
        filamentTypeFilter,
        locationFilter,
        unassignedLocation,
      });

    const groupedData = () =>
      groupFilamentByLocation(filteredData(), [...locations, unassignedLabel]);

    const startTypesLoad = () => {
      if (!loadFilamentTypes || typesLoaded || typesLoading) return;
      typesLoading = true;
      tag.promise = loadFilamentTypes()
        .then((items) => {
          filamentTypes = Array.isArray(items) ? items : [];
          typesLoaded = true;
          typesError = "";
        })
        .catch((error) => {
          console.error("Filament types load failed", error);
          filamentTypes = [];
          typesLoaded = true;
          typesError = "Failed to load filament types.";
        })
        .finally(() => {
          typesLoading = false;
        });
    };

    const startLoad = () => {
      if (!loadFilamentInventory) {
        console.debug("FilamentInventoryApp load skipped: no loader provided");
        return;
      }
      if (hasLoaded || isLoading) return;
      isLoading = true;
      console.debug("FilamentInventoryApp loading inventory...");
      tag.promise = loadFilamentInventory()
        .then((items) => {
          console.debug("FilamentInventoryApp load complete", {
            count: items?.length || 0,
          });
          loadError = "";
          data = applyFilamentInventory(items || []);
          hasLoaded = true;
        })
        .catch((error) => {
          console.error("FilamentInventoryApp load failed", error);
          loadError = "Failed to load inventory.";
          data = applyFilamentInventory([]);
          hasLoaded = true;
        })
        .finally(() => {
          isLoading = false;
        });
    };

    startTypesLoad();
    startLoad();

    return [
      header(
        AdminNav(onSignOut, user),
        h1("Filament Inventory"),
        p(
          "Edit filament inventory in place. Changes are saved directly to Firestore."
        ),
      ),

      main(
        section.class`panel`(
          _=> `editIndex:${editingTarget?.index}:`,
          div.class`meta`(
            div.class`controls`(
              div.class`controls-group`(
                button(
                  {
                    id: "addFilamentButton",
                    class: "add-button",
                    type: "button",
                    onClick: addFilament,
                  },
                  "➕ Add filament"
                ),
              ),
              div.class`controls-group`(
                select
                  .value(_=> filamentTypeFilter ?? "")
                  .onChange((event) => {
                    filamentTypeFilter = event?.target?.value || "";
                  })(
                  option
                    .value``
                    ("Filter by filament type"),
                  ...(filamentTypes || []).map((type) =>
                    option
                      .value(type.filament_type_id)(
                      describeFilamentType(type) || type.label || "Untitled"
                    )
                  )
                ),
                select
                  .value(_=> locationFilter ?? "")
                  .onChange((event) => {
                    locationFilter = event?.target?.value || "";
                  })(
                  option
                    .value``
                    ("📍 Filter by location"),
                  ...locations.map((location) =>
                    option
                      .value(location)(location)
                  ),
                  option
                    .value(unassignedLocation)("Unassigned")
                ),
                div.id`count`(_=> `${filteredData().length} items`)
              )
            )
          ),
          
          div.id`summaryList`.class`summary-list`(
            _ =>
              groupedData().map(([location, items]) =>
                div.class`location-group`(
                  div.class`location-title-row`(
                    h2.class`location-title`(`📍 ${location} (${items.length})`),
                    location === unassignedLabel
                      ? null
                      : a
                          .class`ghost-button location-fast-edit`
                          .href`./${slugifyLocation(location)}/fast-edit.html`
                          ("⚡ Fast edit")
                  ),
                  _=> items.map(({ item, index, type }) =>
                    InventoryRow(
                      item,
                      type,
                      index,
                      editingTarget?.index === index, // isEditMode
                      toggleRowEdit,
                      filamentTypes,
                      saveCurrentFilaments,
                      duplicateFilamentAt
                    ).key(
                      item.filament_type_id || `item-${index}`
                    )
                  )
                ).key(location)
              )
          )
        )
      )
    ];
  }
);

const normalizeLocation = (location) =>
  locations.includes(location) ? location : "";

const prepareFilamentInventory = (items) =>
  (Array.isArray(items) ? items : [])
    .map((item) => ({
      ...item,
      location: normalizeLocation(item.location),
    }));

// Normalize filament entries for Firestore by stripping empty fields and coercing types.
const serializeFilamentInventory = (items) =>
  items.map((item) => {
    const cleaned = {};

    if (item.filament_type_id) cleaned.filament_type_id = item.filament_type_id;

    if (item.location) cleaned.location = item.location;
    if (item.spool_inventory !== undefined && item.spool_inventory !== "") {
      cleaned.spool_inventory = Number(item.spool_inventory) || 0;
    }

    return cleaned;
  });

const createEmptyInventoryItem = (defaultLocation = "", filamentTypes = []) => ({
  filament_type_id: filamentTypes?.[0]?.filament_type_id || "",
  spool_inventory: 1,
  location: defaultLocation,
});

const applyFilamentInventory = (items) => {
  const prepared = prepareFilamentInventory(items);
  console.debug("Filament inventory loaded", { count: prepared.length });
  return prepared;
};

const saveFilamentInventoryToFirestore = (items) =>
  saveFilamentInventory(serializeFilamentInventory(items))
  .catch((error) => {
    console.error("Failed to save filament inventory", error);
    alert("Save failed. Check the console for details.");
  });

const filterFilamentInventory = (items, filamentTypes, filters) =>
  items.reduce((acc, item, index) => {
    const matchesType =
      !filters.filamentTypeFilter ||
      item.filament_type_id === filters.filamentTypeFilter;
    const matchesLocation = matchesLocationFilter(
      item.location,
      filters.locationFilter,
      filters.unassignedLocation
    );

    if (matchesType && matchesLocation) {
      const type = filamentTypes?.find(
        (entry) => entry.filament_type_id === item.filament_type_id
      );
      acc.push({ item, index, type });
    }
    return acc;
  }, []);

const groupFilamentByLocation = (entries, locationLabels) => {
  const grouped = new Map();
  locationLabels.forEach((location) => {
    grouped.set(location, []);
  });
  entries.forEach((entry) => {
    const location = entry.item.location || locationLabels[locationLabels.length - 1];
    if (!grouped.has(location)) {
      grouped.set(location, []);
    }
    grouped.get(location).push(entry);
  });
  return Array.from(grouped.entries()).filter(([, items]) => items.length);
};
