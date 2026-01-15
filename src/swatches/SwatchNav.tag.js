import { tag, div, a, button, img, span } from "taggedjs";

const renderUser = (user) => {
  if (!user?.email) return null;
  const avatar = user.photoURL
    ? img({
        class: "user-avatar-image",
        src: user.photoURL,
        alt: user.email,
        referrerPolicy: "no-referrer",
      })
    : span.class`user-avatar-fallback`(
        (user.email || "?")[0].toUpperCase()
      );
  return div.class`user-badge`(
    avatar,
    span.class`user-email`(user.email)
  );
};

export const SwatchNav = tag((onSignOut, user) => {
  SwatchNav.updates((args) => {
    [onSignOut, user] = args;
  });

  return div.class`menu-bar`(
    renderUser(user),
    div.class`menu-actions`(
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
    )
  );
});
