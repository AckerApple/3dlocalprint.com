import { isAdminEmail, onAuthChanged, prepareAuth, signIn, signOutUser, saveAdmins, subscribeAdmins, getCurrentUser } from "./firebase.js";
import { tag, tagElement, section, div, input, button, p, a, h1 } from "taggedjs";
import { SwatchNav } from "./SwatchNav.tag.js";
import { mountSsoPanel, replaceMountRoot } from "./ssoMount.js";
import { toast } from "./toast.js";
import { debugLog, flushDebugLog, debugPause } from "./debug.js";

let app = document.getElementById("adminsApp");
const appRoot = { current: app };
const state = [];
let newAdminEmail = "";
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
  if (!value) {
    toast.error("Enter an email address.");
    return;
  }
  if (state.some((email) => email.toLowerCase() === value)) {
    toast.error("That admin is already listed.");
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

const saveList = async () => {
  if (!isAuthorized) {
    toast.error("Sign in to save changes.");
    return;
  }
  try {
    await saveAdmins(state.map((email) => email));
    toast.success("Admins saved.");
  } catch (error) {
    console.error("Failed to save admins", error);
    toast.error("Save failed. Try again.");
  }
};

const handleSignOut = () =>
  signOutUser().catch((error) => {
    console.error("Firebase sign-out failed", error);
    toast.error("Sign out failed. Try again.");
  });

export const AdminsApp = tag(() => [
  SwatchNav(handleSignOut),
  section.class`panel manufacturers-panel`(
    h1("Manage Admins"),
    p("Update the list of emails allowed to access the swatch tools."),
    div.class`manufacturer-list`(
      ...state.map((email, index) =>
        div.class`manufacturer-row`(
          input
            .class`manufacturer-input`
            .type`email`
            .value(_=> state[index] ?? "")
            .onInput((event) => {
              state[index] = event.target.value.trim().toLowerCase();
            })(),
          button
            .type`button`
            .class`ghost-button`
            .onClick(() => removeAdmin(index))(
            "Remove"
          )
        )
      )
    ),
    div.class`manufacturer-add`(
      input
        .class`manufacturer-input`
        .type`email`
        .attr("placeholder", "New admin email")
        .value(_=> newAdminEmail)
        .onInput((event) => {
          newAdminEmail = event.target.value;
        })(),
      button
        .type`button`
        .class`add-button`
        .onClick(addAdmin)(
        "➕ Add admin"
      )
    ),
    div.class`auth-actions`(
      button
        .type`button`
        .class`add-button`
        .onClick(saveList)(
        "💾 Save to Firestore"
      )
    )
  ),
]);

const mountApp = () => {
  debugLog("mountApp", { reason: "admins" });
  if (!appRoot.current || appMounted) {
    return;
  }

  const nextRoot = replaceMountRoot(appRoot);
  if (!nextRoot) return;
  nextRoot.replaceChildren();
  tagElement(AdminsApp, nextRoot);
  appMounted = true;
  app = appRoot.current;
};

const mountSso = (status, userEmail, reason = "") => {
  debugLog("mountSso", { status, userEmail, reason });
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
  debugLog("auth:changed", { userEmail: user?.email || null, reason });
  isAuthorized = false;
  if (!user) {
    if (stopAdmins) {
      stopAdmins();
      stopAdmins = null;
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
    if (stopAdmins) {
      stopAdmins();
      stopAdmins = null;
    }
    toast.error(`Signed in as ${user.email || "unknown"} but not authorized.`);
    mountSso("denied", user.email || "", "auth:denied");
    return;
  }

  isAuthorized = true;
  if (!stopAdmins) {
    stopAdmins = subscribeAdmins((items) => {
      if (Array.isArray(items) && items.length) {
        state.splice(0, state.length, ...items);
      } else {
        state.splice(0, state.length);
      }
      if (isAuthorized) {
        if (appMounted) {
          rerender();
        } else {
          mountApp("admins:update");
        }
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
      debugPause("after prepareAuth");
      debugLog("auth:redirectResult", {
        hasUser: Boolean(redirectResult?.user),
        email: redirectResult?.user?.email || "",
      });
      debugPause("after redirectResult");
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
    debugPause("after onAuthChanged");
  });
};

startAuth();
