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
  getCurrentUser,
} from "./firebase.js";
import { tag, tagElement } from "taggedjs";
import { toast } from "./toast.js";
import { debugLog, flushDebugLog } from "./debug.js";

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
  debugLog("mountApp", { reason });
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
  debugLog("mountSso", { status, userEmail, reason });
  mountSsoPanel({
    rootRef: swatchRoot,
    status,
    userEmail,
    adminEmail: "",
    onSignIn: () => {
      debugLog("signIn:click");
      return signIn().catch((error) => {
        console.error("Firebase sign-in failed", error);
        toast.error("Sign in failed. Try again.");
      });
    },
    onSignOut: handleSignOut,
    setAppMounted: (value) => {
      appMounted = value;
    },
  });
};

mountSso("loading", "", "initial");

const handleAuthUser = async (user, reason = "") => {
  debugLog("auth:changed", { userEmail: user?.email || null, reason });
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
};

const startAuth = async () => {
  flushDebugLog();
  debugLog("page:load", { path: window.location.pathname });
  window.addEventListener("pageshow", (event) => {
    debugLog("page:pageshow", { persisted: event.persisted });
  });
  window.addEventListener("pagehide", (event) => {
    debugLog("page:pagehide", { persisted: event.persisted });
  });
  window.addEventListener("visibilitychange", () => {
    debugLog("page:visibility", { state: document.visibilityState });
  });

  prepareAuth()
    .then(({ redirectError, redirectResult, persistence }) => {
      if (redirectError) {
        toast.error("Sign-in failed after redirect. Try again.");
      }
      debugLog("auth:persistence", persistence);
      if (persistence.error) {
        toast.error("Safari blocked login storage. Check cookie settings.");
      }
      debugLog("auth:redirectResult", {
        hasUser: Boolean(redirectResult?.user),
        email: redirectResult?.user?.email || "",
      });
      if (redirectResult?.user) {
        handleAuthUser(redirectResult.user, "redirectResult");
      }
      if (!redirectResult?.user) {
        const currentUser = getCurrentUser();
        if (currentUser) {
          handleAuthUser(currentUser, "currentUser");
        } else {
          let attempts = 0;
          const retry = () => {
            attempts += 1;
            const nextUser = getCurrentUser();
            debugLog("auth:retry", {
              attempt: attempts,
              hasUser: Boolean(nextUser),
            });
            if (nextUser) {
              handleAuthUser(nextUser, "currentUser:retry");
              return;
            }
            if (attempts < 8) {
              window.setTimeout(retry, 500);
            }
          };
          window.setTimeout(retry, 500);
        }
      }
    })
    .catch((error) => {
      console.error("Failed to prepare auth", error);
      toast.error("Sign-in setup failed. Try again.");
    });

  onAuthChanged((user) => {
    handleAuthUser(user, "onAuthChanged");
  });
};

startAuth();
