import { FilamentInventoryApp } from "./FilamentInventoryApp.tag.js";
import { mountSsoPanel, replaceMountRoot } from "./ssoMount.js";
import { signIn, signOutUser } from "./firebase.js";
import { tag, tagElement } from "taggedjs";
import { toast } from "./toast.js";
import { startAuthFlow } from "./auth-flow.js";
import { handleAdminAuthUser } from "./auth-handler.js";

const filamentRoot = { current: document.getElementById("filamentApp") };
let isAuthorized = false;
let appMounted = false;
let currentUser = null;

const handleSignOut = () =>
  signOutUser().catch((error) => {
    console.error("Firebase sign-out failed", error);
    toast.error("Sign out failed. Try again.");
  });

const InventoryRoot = tag(() =>
  FilamentInventoryApp(
    handleSignOut,
    currentUser
  )
);

const mountApp = (reason = "") => {
  if (!filamentRoot.current || appMounted) {
    return;
  }

  const nextRoot = replaceMountRoot(filamentRoot);
  if (!nextRoot) return;
  nextRoot.replaceChildren();
  tagElement(InventoryRoot, nextRoot);
  appMounted = true;
};


const mountSso = (status, userEmail, reason = "") => {
  mountSsoPanel({
    rootRef: filamentRoot,
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

const handleAuthUser = async (user, reason = "") => {
  isAuthorized = false;
  const isAllowed = await handleAdminAuthUser({
    user,
    mountSso,
    toast,
    setCurrentUser: (value) => {
      currentUser = value;
    },
    onAuthorized: () => {
      isAuthorized = true;
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
