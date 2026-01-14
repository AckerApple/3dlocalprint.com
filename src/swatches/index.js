import { SwatchApp } from "./SwatchApp.tag.js";
import { manufacturers as baseManufacturers } from "./manufacturers.array.js";
import { mountSsoPanel, replaceMountRoot } from "./ssoMount.js";
import {
  subscribeManufacturers,
  isAdmin,
  adminEmails,
  onAuthChanged,
  prepareAuth,
  signIn,
  signOutUser,
} from "./firebase.js";
import { tag, tagElement } from "taggedjs";

const swatchRoot = { current: document.getElementById("swatchApp") };
const adminEmail = adminEmails[0] || "";
let manufacturersList = baseManufacturers.map((name) => name);
let stopManufacturers = null;
let isAuthorized = false;
let appMounted = false;

const handleSignOut = () =>
  signOutUser().catch((error) => {
    console.error("Firebase sign-out failed", error);
    alert("Sign out failed. Check the console for details.");
  });

const App = tag(() =>
  SwatchApp(
    manufacturersList,
    handleSignOut
  )
);

const mountApp = (reason = "") => {
  if (!swatchRoot.current || appMounted) {
    return;
  }
  console.debug("mountApp", { reason });
  const nextRoot = replaceMountRoot(swatchRoot);
  if (!nextRoot) return;
  nextRoot.replaceChildren();
  tagElement(App, nextRoot);
  appMounted = true;
};

const mountSso = (status, userEmail, reason = "") => {
  console.debug("mountSso", { status, userEmail, reason });
  mountSsoPanel({
    rootRef: swatchRoot,
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
};

mountSso("loading", "", "initial");
prepareAuth();

onAuthChanged((user) => {
  console.debug("auth changed", { userEmail: user?.email || null });
  isAuthorized = false;
  if (!user) {
    if (stopManufacturers) {
      stopManufacturers();
      stopManufacturers = null;
    }
    mountSso("login", "", "auth:logged-out");
    return;
  }

  if (!isAdmin(user)) {
    if (stopManufacturers) {
      stopManufacturers();
      stopManufacturers = null;
    }
    mountSso("denied", user.email || "", "auth:denied");
    return;
  }

  isAuthorized = true;
  if (!stopManufacturers) {
    stopManufacturers = subscribeManufacturers((items) => {
      console.debug("manufacturers update", { count: items?.length || 0 });
      if (Array.isArray(items) && items.length) {
        manufacturersList = items;
      } else {
        manufacturersList = baseManufacturers.map((name) => name);
      }
      if (isAuthorized) {
        mountApp("manufacturers:update");
        return;
      }
    });
  }

  mountApp("auth:authorized");
});
