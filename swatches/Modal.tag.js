import {
  tag,
  button,
  h2,
  output,
  dialog,
  div,
} from "https://cdn.jsdelivr.net/gh/AckerApple/taggedjs@dist/bundle.js";

export const Modal = tag(({ title, onClose, content }) => {
  Modal.updates((args) => {
    [{ title, onClose, content }] = args;
    onClose = output(onClose);
  });
  onClose = output(onClose);
  const dialogId = `qr-modal-${Math.random().toString(36).slice(2, 9)}`;

  const closeDialog = () => {
    const dialogEl = document.getElementById(dialogId);
    if (dialogEl?.close) {
      dialogEl.close();
    }

    onClose();
    console.log('Modal.tag.js close')
  };

  const onBackdropClick = (event) => {
    if (event.target.nodeName === "DIALOG") {
      closeDialog();
    }
  };

  return dialog(
    {
      id: dialogId,
      class: "qr-modal",
      open: true,
      onClick: onBackdropClick,
    },
    div(
      { class: "qr-modal-card" },
      div(
        { class: "qr-modal-header" },
        h2({ class: "qr-modal-title" }, title),
        div(
          { class: "qr-modal-actions" },
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
      div({ class: "qr-modal-body" }, _=> content())
    )
  );
});
