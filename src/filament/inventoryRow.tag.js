import { tag, noElement, output } from "taggedjs";
import { inventoryEditCard } from "./inventoryEditCard.tag.js";
import { inventorySummaryRow } from "./inventorySummaryRow.tag.js";
import { updateEditingLocation } from "./filamentDisplayFunctions.js";

export const InventoryRow = tag(
  (
    item,
    type,
    index,
    editingTarget,
    toggleRowEdit,
    filamentTypes,
    onSave,
    onDuplicate
  ) => {
    InventoryRow.updates((args) => {
      [
        item,
        type,
        index,
        editingTarget,
        toggleRowEdit,
        filamentTypes,
        onSave,
        onDuplicate,
      ] = args;
      toggleRowEdit = output(toggleRowEdit);
    });

    toggleRowEdit = output(toggleRowEdit);
    const isEditing = () =>
      editingTarget?.index === index &&
      (editingTarget?.location ?? "") === (item?.location ?? "");

    return noElement(
      _=> isEditing()
        ? inventoryEditCard(
            item,
            index,
            filamentTypes,
            toggleRowEdit,
            onSave,
            onDuplicate,
            updateEditingLocation
          )
        : inventorySummaryRow(item, type, index, toggleRowEdit, onSave)
    );
  }
);
