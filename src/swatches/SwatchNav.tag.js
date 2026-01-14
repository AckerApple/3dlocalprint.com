import { tag, div, a, button } from "taggedjs";

export const SwatchNav = tag((onSignOut) => {
  SwatchNav.updates((args) => {
    [onSignOut] = args;
  });

  return div.class`menu-actions`(
    a(
      {
        class: "menu-button",
        href: "/",
      },
      "🏠 Home"
    ),
    a(
      {
        class: "menu-button",
        href: "./index.html",
      },
      "🎨 Swatch editor"
    ),
    a(
      {
        class: "menu-button",
        href: "./manufacturers.html",
      },
      "🏭 Manage manufacturers"
    ),
    a(
      {
        class: "menu-button",
        href: "./admins.html",
      },
      "🛡️ Manage admins"
    ),
    onSignOut
      ? button(
          {
            type: "button",
            class: "menu-button",
            onClick: onSignOut,
          },
          "🚪 Sign out"
        )
      : null
  );
});
