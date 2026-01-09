import {
  tag,
  section,
  div,
  button,
  h2,
  textarea,
  strong,
  span,
} from "https://cdn.jsdelivr.net/gh/AckerApple/taggedjs@dist/bundle.js";
import { SwatchRow } from "./SwatchRow.tag.js";
import { editingIndex, editAll, setViewMode, toggleEditAll, toggleRowEdit, viewMode } from "./data.js";
import { extractQrToken, findQrMatches } from "./qr-utils.js";
import { CodeScannerModal } from "./CodeScannerModal.tag.js";

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

    let showQrScanner = false;
    let qrText = "";
    let qrToken = "";
    let qrMatches = [];

    const applyQrScan = (text) => {
      qrText = text || "";
      qrToken = extractQrToken(qrText);
      qrMatches = findQrMatches(data, qrToken);
      showQrScanner = false;
      console.log('app apply', text)
    };

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
            button(
              {
                id: "qrSearchButton",
                class: "add-button",
                type: "button",
                onClick: () => showQrScanner = true,
              },
              "Search by QR read"
            ),
            div.id`count`(_=> `${data.length} swatches`),
            div('editingIndex:', () => editingIndex),
            div('showQrScanner:', () => showQrScanner),
          )
        ),
        _=> showQrScanner &&
          CodeScannerModal({
            title: "Search by QR read",
            onClose: () => (showQrScanner = false),
            onApply: applyQrScan,
            applyLabel: "Apply QR",
          }),
        div(
          {
            class: "qr-search-pill",
            hidden: () => viewMode !== "summary" || !qrText,
          },
          span({ class: "qr-label" }, "Active search"),
          strong({ class: "qr-value" }, () => qrText || "(empty)"),
          button(
            {
              type: "button",
              class: "qr-clear-button",
              onClick: () => {
                qrText = "";
                qrToken = "";
                qrMatches = [];
              },
            },
            "Clear search"
          )
        ),
        div(
          {
            class: "qr-results",
            hidden: () => viewMode !== "summary" || !qrText,
          },
          div(
            { class: "qr-result-row" },
            span({ class: "qr-label" }, "Scanned Text"),
            strong({ class: "qr-value" }, () => qrText || "(empty)")
          ),
          div(
            { class: "qr-result-row" },
            span({ class: "qr-label" }, "Identifier"),
            strong({ class: "qr-value" }, () => qrToken || "(none)")
          ),
          div(
            { class: "qr-result-row" },
            span({ class: "qr-label" }, "Matches"),
            div(
              { class: "qr-match-list" },
              () =>
                qrMatches.length
                  ? qrMatches.map((item) =>
                      div(
                        { class: "qr-match-item" },
                        `${item.number || "-"} · ${item.label || "Untitled"}`
                      )
                    )
                  : div({ class: "qr-match-empty" }, "No matches yet.")
            )
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
