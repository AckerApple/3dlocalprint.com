import { isAdminEmail, onAuthChanged, prepareAuth, signIn, signOutUser, saveAdmins, subscribeAdmins } from "./firebase.js";
import { tag, tagElement, section, div, input, button, p, a, h1 } from "taggedjs";
import { SwatchNav } from "./SwatchNav.tag.js";
import { mountSsoPanel, replaceMountRoot } from "./ssoMount.js";
import { toast } from "./toast.js";

let app = document.getElementById("adminsApp");
const appRoot = { current: app };
const state = [];
let newAdminEmail = "";
let stopAdmins = null;
let isAuthorized = false;
let appMounted = false;
let currentUser = null;

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
  SwatchNav(handleSignOut, currentUser),
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
  if (!user) {
    currentUser = null;
    if (stopAdmins) {
      stopAdmins();
      stopAdmins = null;
    }
    mountSso("login", "", "auth:logged-out");
    return;
  }

  currentUser = {
    email: user.email || "",
    photoURL: user.photoURL || "",
  };

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
  prepareAuth()
    .then(({ redirectError, redirectResult, persistence }) => {
      if (redirectError) {
        toast.error("Sign-in failed after redirect. Try again.");
      }
      if (persistence.error) {
        toast.error("Safari blocked login storage. Check cookie settings.");
      }
      if (redirectResult?.user) {
        handleAuthUser(redirectResult.user, "redirectResult");
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
