import { tag, tagElement } from "taggedjs";
import { FilamentFastEditApp } from "./FilamentFastEditApp.tag.js";
import { mountSsoPanel, replaceMountRoot } from "./ssoMount.js";
import {
  signIn,
  signOutUser,
} from "./firebase.js";
import { toast } from "./toast.js";
import { startAuthFlow } from "./auth-flow.js";
import { handleAdminAuthUser } from "./auth-handler.js";

const appRoot = { current: document.getElementById("fastEditApp") };
const location = appRoot.current?.dataset?.location || "";
const locationSlug = appRoot.current?.dataset?.locationSlug || "";
let appMounted = false;
let currentUser = null;

const handleSignOut = () =>
  signOutUser().catch((error) => {
    console.error("Firebase sign-out failed", error);
    toast.error("Sign out failed. Try again.");
  });

const App = tag(() => FilamentFastEditApp(location, locationSlug, currentUser));

const mountApp = () => {
  if (!appRoot.current || appMounted) {
    return;
  }
  const nextRoot = replaceMountRoot(appRoot);
  if (!nextRoot) return;
  nextRoot.replaceChildren();
  tagElement(App, nextRoot);
  appMounted = true;
};

const mountSso = (status, userEmail, reason = "") => {
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
};

mountSso("loading", "", "initial");

const handleAuthUser = async (user) => {
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
  });
  if (!isAllowed) return;
};

startAuthFlow({
  onUser: handleAuthUser,
  toast,
});
