import { manufacturers as baseManufacturers } from "./manufacturers.array.js";
import {
  signIn,
  signOutUser,
  saveManufacturers,
  subscribeManufacturers,
} from "./firebase.js";
import {
  tag,
  tagElement,
  section,
  div,
  input,
  button,
  textarea,
  h2,
  p,
  a,
  h1,
} from "taggedjs";
import { toast } from "./toast.js";
import { AdminNav } from "./AdminNav.tag.js";
import { mountSsoPanel, replaceMountRoot } from "./ssoMount.js";
import { startAuthFlow } from "./auth-flow.js";
import { handleAdminAuthUser } from "./auth-handler.js";

let app = document.getElementById("manufacturersApp");
const appRoot = { current: app };
const state = baseManufacturers.map((name) => name);
let newManufacturer = "";
let stopManufacturers = null;
let isAuthorized = false;
let appMounted = false;
let currentUser = null;

const rerender = () => {
  if (!appRoot.current) return;
  appRoot.current.replaceChildren();
  tagElement(ManufacturersApp, appRoot.current);
};

const addManufacturer = () => {
  const value = newManufacturer.trim();
  if (!value) return;
  state.push(value);
  newManufacturer = "";
  rerender();
};

const removeManufacturer = (index) => {
  state.splice(index, 1);
  rerender();
};

const saveList = async () => {
  if (!isAuthorized) {
    toast.error("Sign in to save changes.");
    return;
  }
  try {
    await saveManufacturers(state.map((name) => name));
    toast.success("🏭 Manufacturers saved.");
  } catch (error) {
    console.error("Failed to save 🏭 manufacturers", error);
    toast.error("Save failed. Try again.");
  }
};

const handleSignOut = () =>
  signOutUser().catch((error) => {
    console.error("Firebase sign-out failed", error);
    toast.error("Sign out failed. Try again.");
  });

export const ManufacturersApp = tag(() => [
  AdminNav(handleSignOut, currentUser),
  section.class`panel manufacturers-panel`(
    h1("🏭 Manage Filament Manufacturers"),
    p("Update the list used by the filament inventory and add new entries."),
    div.class`manufacturer-list`(
      ...state.map((name, index) =>
        div.class`manufacturer-row`(
          input({
            class: "manufacturer-input",
            type: "text",
            value: () => state[index] ?? "",
            onInput: (event) => {
              state[index] = event.target.value;
            },
          }),
          button(
            {
              type: "button",
              class: "ghost-button",
              onClick: () => removeManufacturer(index),
            },
            "Remove"
          )
        )
      )
    ),
    div.class`manufacturer-add`(
      input({
        class: "manufacturer-input",
        type: "text",
        placeholder: "New 🏭 manufacturer",
        value: () => newManufacturer,
        onInput: (event) => {
          newManufacturer = event.target.value;
        },
      }),
      button(
        {
          type: "button",
          class: "add-button",
          onClick: addManufacturer,
        },
        "➕ Add 🏭 manufacturer"
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

const mountApp = () => {
  if (!appRoot.current || appMounted) {
    return;
  }
  const nextRoot = replaceMountRoot(appRoot);
  if (!nextRoot) return;
  nextRoot.replaceChildren();
  tagElement(ManufacturersApp, nextRoot);
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
  isAuthorized = false;
  const isAllowed = await handleAdminAuthUser({
    user,
    mountSso,
    toast,
    setCurrentUser: (value) => {
      currentUser = value;
    },
    onSignedOut: () => {
      if (stopManufacturers) {
        stopManufacturers();
        stopManufacturers = null;
      }
    },
    onDenied: () => {
      if (stopManufacturers) {
        stopManufacturers();
        stopManufacturers = null;
      }
    },
    onAuthorized: () => {
      isAuthorized = true;
      if (!stopManufacturers) {
        stopManufacturers = subscribeManufacturers((items) => {
          if (Array.isArray(items) && items.length) {
            state.splice(0, state.length, ...items);
          } else {
            state.splice(0, state.length, ...baseManufacturers);
          }
          if (isAuthorized) {
            mountApp("manufacturers:update");
          }
        });
      }
      mountApp("auth:authorized");
    },
    reason,
  });
  if (!isAllowed) return;
};

startAuthFlow({
  onUser: handleAuthUser,
  toast,
});
