import {
  tag,
  section,
  div,
  button,
  h2,
  textarea,
} from "https://cdn.jsdelivr.net/gh/AckerApple/taggedjs@dist/bundle.js";
import { SwatchRow } from "./SwatchRow.tag.js";
import { editingIndex, editAll, setViewMode, toggleEditAll, toggleRowEdit, viewMode } from "./data.js";

export const SwatchApp = tag(
  (
    data,
    addSwatch,
    serializeSwatches,
  ) => {
    SwatchApp.updates((args) => {
      [
        data,
        addSwatch,
        serializeSwatches,
      ] = args;
    });

    return [
      section(
        { class: "panel" },
        div(
          { class: "meta" },
          div(
            { class: "controls" },
            div(
              { class: "toggle", role: "tablist", "aria-label": "View toggle" },
              button(
                {
                  id: "summaryViewButton",
                  class: () => (viewMode === "summary" ? "active" : ""),
                  role: "tab",
                  type: "button",
                  onClick: () => setViewMode("summary"),
                },
                "Summary"
              ),
              button(
                {
                  id: "jsonViewButton",
                  class: () => (viewMode === "json" ? "active" : ""),
                  role: "tab",
                  type: "button",
                  onClick: () => setViewMode("json"),
                },
                "JSON"
              )
            ),
            button(
              {
                id: "editAllButton",
                class: "add-button",
                type: "button",
                onClick: toggleEditAll,
              },
              () => (editAll ? "Exit edit all" : "Edit all")
            ),
            button(
              {
                id: "addSwatchButton",
                class: "add-button",
                type: "button",
                hidden: () => !editAll,
                onClick: addSwatch,
              },
              "+ Add swatch"
            ),
            div({ id: "count" }, () => `${data.length} swatches`)
          )
        ),
        
        div.id`summaryList`.class`summary-list`(
          {
            hidden: () => viewMode !== "summary",
          },

          _ => 
            data.map((item, index) =>
              SwatchRow(item, index, editAll, editingIndex, toggleRowEdit).key(
                item.number || index
              )
            )
        )
      ),
      section(
        { id: "jsonPanel", class: "panel", hidden: () => viewMode !== "json" },
        h2({ class: "output-title" }, "JSON output"),
        textarea({
          id: "jsonOutput",
          spellcheck: "false",
          readOnly: true,
          value: () => JSON.stringify(serializeSwatches(), null, 2),
        })
      ),
    ];
  }
);
