import { adminEmails, isAdmin, onAuthChanged, signIn, signOutUser, saveAdmins, subscribeAdmins } from "./firebase.js";
import { tag, tagElement, section, div, input, button, p, a, h1 } from "taggedjs";
import { SwatchNav } from "./SwatchNav.tag.js";
import { mountSsoPanel, replaceMountRoot } from "./ssoMount.js";

let app = document.getElementById("adminsApp");
const appRoot = { current: app };
const baseAdmins = adminEmails.map((email) => email);
const state = baseAdmins.map((email) => email);
let newAdminEmail = "";
const adminEmail = adminEmails[0] || "";
let stopAdmins = null;
let isAuthorized = false;
let appMounted = false;

const rerender = () => {
  if (!appRoot.current) return;
  appRoot.current.replaceChildren();
  tagElement(AdminsApp, appRoot.current);
};

const addAdmin = () => {
  const value = newAdminEmail.trim().toLowerCase();
  if (!value || state.includes(value)) return;
  if (!/@(gmail\.com|googlemail\.com)$/i.test(value)) {
    alert("Only gmail addresses are allowed for now.");
    return;
  }
  state.push(value);
  newAdminEmail = "";
  rerender();
};

const removeAdmin = (index) => {
  const email = state[index] || "";
  if (!confirm(`Remove admin ${email}?`)) return;
  state.splice(index, 1);
  rerender();
};

const saveList = () => {
  saveAdmins(state.map((email) => email)).catch((error) => {
    console.error("Failed to save admins", error);
    alert("Save failed. Check the console for details.");
  });
};

const handleSignOut = () =>
  signOutUser().catch((error) => {
    console.error("Firebase sign-out failed", error);
    alert("Sign out failed. Check the console for details.");
  });

export const AdminsApp = tag(() => [
  SwatchNav(handleSignOut),
  section.class`panel manufacturers-panel`(
    h1("Manage Admins"),
    p("Update the list of emails allowed to access the swatch tools."),
    div.class`manufacturer-list`(
      ...state.map((email, index) =>
        div.class`manufacturer-row`(
          input({
            class: "manufacturer-input",
            type: "email",
            value: () => state[index] ?? "",
            onInput: (event) => {
              state[index] = event.target.value.trim().toLowerCase();
            },
          }),
          button(
            {
              type: "button",
              class: "ghost-button",
              onClick: () => removeAdmin(index),
            },
            "Remove"
          )
        )
      )
    ),
    div.class`manufacturer-add`(
      input({
        class: "manufacturer-input",
        type: "email",
        placeholder: "New admin email",
        value: () => newAdminEmail,
        onInput: (event) => {
          newAdminEmail = event.target.value;
        },
      }),
      button(
        {
          type: "button",
          class: "add-button",
          onClick: addAdmin,
        },
        "➕ Add admin"
      )
    ),
    div.class`auth-actions`(
      button(
        {
          type: "button",
          class: "add-button",
          onClick: saveList,
        },
        "💾 Save to Firestore"
      )
    )
  ),
]);

const mountApp = (reason = "") => {
  if (!appRoot.current || appMounted) {
    console.debug("admins mountApp skipped", { reason, appMounted, hasElement: !!app });
    return;
  }
  console.debug("admins mountApp run", { reason });
  console.trace("admins mountApp trace");
  const nextRoot = replaceMountRoot(appRoot);
  if (!nextRoot) return;
  nextRoot.replaceChildren();
  tagElement(AdminsApp, nextRoot);
  appMounted = true;
  app = appRoot.current;
};

const mountSso = (status, userEmail, reason = "") => {
  console.debug("admins mountSso run", { status, userEmail, reason });
  console.trace("admins mountSso trace");
  mountSsoPanel({
    rootRef: appRoot,
    status,
    userEmail,
    adminEmail,
    onSignIn: () =>
      signIn().catch((error) => {
        console.error("Firebase sign-in failed", error);
        alert("Sign in failed. Check the console for details.");
      }),
    onSignOut: handleSignOut,
    setAppMounted: (value) => {
      appMounted = value;
    },
  });
  app = appRoot.current;
};

mountSso("loading", "", "initial");

onAuthChanged((user) => {
  isAuthorized = false;
  if (!user) {
    if (stopAdmins) {
      stopAdmins();
      stopAdmins = null;
    }
    mountSso("login", "", "auth:logged-out");
    return;
  }

  if (!isAdmin(user)) {
    if (stopAdmins) {
      stopAdmins();
      stopAdmins = null;
    }
    mountSso("denied", user.email || "", "auth:denied");
    return;
  }

  isAuthorized = true;
  if (!stopAdmins) {
    stopAdmins = subscribeAdmins((items) => {
      if (Array.isArray(items) && items.length) {
        state.splice(0, state.length, ...items);
      } else {
        state.splice(0, state.length, ...baseAdmins);
      }
      if (isAuthorized) {
        mountApp("admins:update");
      }
    });
  }

  mountApp("auth:authorized");
});
