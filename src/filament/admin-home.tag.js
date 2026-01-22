import {
  tag,
  tagElement,
  div,
  section,
  h1,
  h2,
  p,
  a,
  button,
  img,
  span,
} from "taggedjs";
import {
  signIn,
  signOutUser,
} from "./firebase.js";
import { mountSsoPanel, replaceMountRoot } from "./ssoMount.js";
import { adminNavItems, withManufacturerEmoji } from "./adminNavItems.js";
import { toast } from "./toast.js";
import { startAuthFlow } from "./auth-flow.js";
import { handleAdminAuthUser } from "./auth-handler.js";

let app = document.getElementById("adminHomeApp");
const appRoot = { current: app };
let appMounted = false;
let currentUser = null;

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

const handleSignOut = () =>
  signOutUser().catch((error) => {
    console.error("Firebase sign-out failed", error);
    toast.error("Sign out failed. Try again.");
  });

export const AdminHomeApp = tag(() => [
  section.class`admin-home`(
    div.class`admin-home-top`(
      renderUser(currentUser),
      button
        .type`button`
        .class`menu-button admin-home-signout`
        .onClick(handleSignOut)(
        "🚪 Sign out"
      )
    ),
    div.class`admin-home-header`(
      h1("Admin Home"),
      p("Choose an admin area to get started.")
    ),
    div.class`admin-home-grid`(
      ...adminNavItems.map((item) =>
        a
          .class`panel admin-home-card`
          .href(item.href)(
          div.class`admin-home-emoji`(item.emoji),
          h2(withManufacturerEmoji(item.label)),
          p(withManufacturerEmoji(item.details))
        )
      )
    )
  ),
]);

const mountApp = () => {
  if (!appRoot.current || appMounted) {
    return;
  }
  const nextRoot = replaceMountRoot(appRoot);
  if (!nextRoot) return;
  nextRoot.replaceChildren();
  tagElement(AdminHomeApp, nextRoot);
  appMounted = true;
  app = appRoot.current;
};

const mountSso = (status, userEmail, reason = "") => {
  if (!appRoot.current) return;
  mountSsoPanel({
    rootRef: appRoot,
    status,
    userEmail,
    adminEmail: "",
    onSignIn: () =>
      signIn().catch((error) => {
        console.error("Firebase sign-in failed", error);
        toast.error("Sign in failed. Try again.");
      }),
    onSignOut: handleSignOut,
    setAppMounted: (value) => {
      appMounted = value;
    },
  });
  app = appRoot.current;
};

mountSso("loading", "", "initial");

const handleAuthUser = async (user, reason = "") => {
  const isAllowed = await handleAdminAuthUser({
    user,
    mountSso,
    toast,
    setCurrentUser: (value) => {
      currentUser = value;
    },
    onAuthorized: () => {
      mountApp();
    },
    reason,
  });
  if (!isAllowed) return;
};

startAuthFlow({
  onUser: handleAuthUser,
  toast,
});
