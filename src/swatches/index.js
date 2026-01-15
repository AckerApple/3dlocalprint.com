import { SwatchApp } from "./SwatchApp.tag.js";
import { manufacturers as baseManufacturers } from "./manufacturers.array.js";
import { mountSsoPanel, replaceMountRoot } from "./ssoMount.js";
import {
  subscribeManufacturers,
  isAdminEmail,
  onAuthChanged,
  prepareAuth,
  signIn,
  signOutUser,
} from "./firebase.js";
import { tag, tagElement } from "taggedjs";
import { toast } from "./toast.js";

const swatchRoot = { current: document.getElementById("swatchApp") };
let manufacturersList = baseManufacturers.map((name) => name);
let stopManufacturers = null;
let isAuthorized = false;
let appMounted = false;

const handleSignOut = () =>
  signOutUser().catch((error) => {
    console.error("Firebase sign-out failed", error);
    toast.error("Sign out failed. Try again.");
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
};

mountSso("loading", "", "initial");

const startAuth = async () => {
  const { redirectError } = await prepareAuth();
  if (redirectError) {
    toast.error("Sign-in failed after redirect. Try again.");
  }

  onAuthChanged(async (user) => {
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

    let isAllowed = false;
    try {
      isAllowed = await isAdminEmail(user.email || "");
    } catch (error) {
      console.error("Failed to load admin list", error);
      toast.error("Unable to verify access. Check Firestore rules.");
      mountSso("denied", user.email || "", "auth:permissions");
      return;
    }

    if (!isAllowed) {
      if (stopManufacturers) {
        stopManufacturers();
        stopManufacturers = null;
      }
      toast.error(`Signed in as ${user.email || "unknown"} but not authorized.`);
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
};

startAuth();
