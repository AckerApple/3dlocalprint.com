import {
  tag,
  button,
  h2,
  output,
  dialog,
  div,
} from "https://cdn.jsdelivr.net/gh/AckerApple/taggedjs@dist/bundle.js";
import { QrScannerPanel } from "./QrScanner.tag.js";

export const CodeScannerModal = tag(
  ({ title, onClose, onApply, applyLabel }) => {
    CodeScannerModal.updates((args) => {
      [{ title, onClose, onApply, applyLabel }] = args;
      
      onClose = output(onClose);
      
      if (onApply) {
        onApply = output(onApply);
      }
    });
    onClose = output(onClose);
    if (onApply) {
      onApply = output(onApply);
    }
    const dialogId = `qr-modal-${Math.random().toString(36).slice(2, 9)}`;

    const closeDialog = () => {
      const dialogEl = document.getElementById(dialogId);
      if (dialogEl?.close) {
        dialogEl.close();
      }
    };

    let pendingText = "";

    const setPendingText = (text) => {
      pendingText = text || "";
      console.log('pendingText', pendingText)
      onApply(pendingText)
    };

    const applyAndClose = () => {
      console.log('>>> pendingText', pendingText)
      if (onApply) {
        onApply(pendingText);
      }
      closeDialog();
    };

    const onBackdropClick = (event) => {
      if (event.target.nodeName === "DIALOG") {
        closeDialog();
      }
    };

    const onDialogClose = () => {
      onClose();
    };

    const onDialogCancel = (event) => {
      if (event?.preventDefault) {
        event.preventDefault();
      }
      closeDialog();
    };

    return dialog(
      {
        id: dialogId,
        class: "qr-modal",
        open: true,
        onClick: onBackdropClick,
        onClose: onDialogClose,
        onCancel: onDialogCancel,
      },
      div(
        { class: "qr-modal-card" },
        div(
          { class: "qr-modal-header" },
          h2({ class: "qr-modal-title" }, title),
          div(
            { class: "qr-modal-actions" },
            _ => pendingText && 
              button(
                {
                  type: "button",
                  class: "qr-modal-apply",
                  onClick: applyAndClose,
                },
                applyLabel || "Apply"
              ),
            button(
              {
                type: "button",
                class: "qr-modal-close",
                "aria-label": "Close",
                onClick: () => closeDialog(),
              },
              "Close"
            )
          )
        ),
        div(
          { class: "qr-modal-body" },
          _=> QrScannerPanel({
            onResult: setPendingText
          })
        )
      )
    );
  }
);
