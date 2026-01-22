import {
  tag,
  div,
  button,
  label,
  input,
  select,
  option,
  span,
  output,
} from "taggedjs";
import { locations } from "./locations.array.js";
import { describeFilamentType } from "./filament-match-utils.js";

const numberHandler = (item, key) => ({
  onChange: (event) => {
    item[key] = event?.target?.value ?? "";
  },
  onKeyup: (event) => {
    item[key] = event?.target?.value ?? "";
  },
});

export const inventoryEditCard = tag(
  (
    item,
    index,
    filamentTypes,
    toggleRowEdit,
    onSave,
    onDuplicate,
    onLocationChange
  ) => {
    inventoryEditCard.updates((args) => {
      [
        item,
        index,
        filamentTypes,
        toggleRowEdit,
        onSave,
        onDuplicate,
        onLocationChange,
      ] = args;
      toggleRowEdit = output(toggleRowEdit);
      console.log('filamentTypes ->',{filamentTypes})
    });
    toggleRowEdit = output(toggleRowEdit);
    let isDirty = false;

    const markDirty = () => {
      isDirty = true;
    };

    const handleFormChange = () => {
      isDirty = true;
    };

    const triggerSave = () => {
      if (!onSave || !isDirty) return;
      const result = onSave();

      const finish = () => {
        isDirty = false;
        toggleRowEdit(index, item?.location ?? "");
      };

      if (result && typeof result.then === "function") {
        result.then(finish);
        return;
      }
      finish();
    };

    const triggerDuplicate = () => {
      if (!onDuplicate) return;
      onDuplicate(index);
    };

    const updateLocation = (event) => {
      const nextValue = event?.target?.value || "";
      item.location = nextValue;
      if (typeof onLocationChange === "function") {
        onLocationChange(index, nextValue);
      }
      markDirty();
    };

    return div.class`swatch-card`(
      div.class`edit-card-header`(
        span.class`edit-card-title`(
          _=> describeFilamentType(
            filamentTypes?.find((type) =>
              type.filament_type_id === item.filament_type_id
            )
          ) || "Filament inventory"
        ),
        div.class`edit-card-actions`(
          onSave
            ? button
                .type`button`
                .class`add-button`
                .disabled(_=> !isDirty)
                .onClick(triggerSave)(
                "💾 Save"
              )
            : null,
          onDuplicate
            ? button
                .type`button`
                .class`ghost-button`
                .onClick(triggerDuplicate)(
                "🧬 Duplicate"
              )
            : null,
          button
            .type`button`
            .class`edit-card-toggle`
            .onClick(() => toggleRowEdit(index, item?.location ?? ""))
            .attr("aria-label", "Stop editing inventory")(
            "Done"
          )
        )
      ),
      div
        .class`fields`
        .onInput(handleFormChange)
        .onChange(handleFormChange)
        .onKeydown((event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            triggerSave();
          }
        })(
        label(
          "Filament type",
          select
            .onChange((event) => {
              item.filament_type_id = event?.target?.value || "";
              markDirty();
            })(
            option
              .value``
              .selected(_=> !item.filament_type_id)
              ("Select filament type"),
              _=> (filamentTypes || []).map((type) =>
              option
                .value(type.filament_type_id)
                .selected(_=> item.filament_type_id === type.filament_type_id)(
                describeFilamentType(type) || type.label || "Unnamed"
              )
            )
          )
        ),
        label(
          "📍 Location",
          select
            .onChange(updateLocation)(
            option
              .value``
              .selected(_=> !item.location)("Select location"),
            ...locations.map((location) =>
              option
                .value(location)
                .selected(_=> item.location === location)(location)
                .key(location)
            )
          )
        ),
        label(
          "Spool Inventory",
          input
            .type`number`
            .value(_=> item.spool_inventory ?? "")
            .onChange(numberHandler(item, "spool_inventory").onChange)
            .onKeyup(numberHandler(item, "spool_inventory").onKeyup)()
        )
      )
    );
  }
);
