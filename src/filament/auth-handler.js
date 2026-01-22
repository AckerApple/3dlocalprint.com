import { ensureAdminAccess } from "./admin-access.js";

export const handleAdminAuthUser = async ({
  user,
  mountSso,
  toast,
  setCurrentUser,
  onSignedOut,
  onDenied,
  onAuthorized,
  reason = "",
} = {}) => {
  if (!user) {
    if (typeof setCurrentUser === "function") {
      setCurrentUser(null);
    }
    if (typeof onSignedOut === "function") {
      onSignedOut();
    }
    if (typeof mountSso === "function") {
      mountSso("login", "", "auth:logged-out");
    }
    return false;
  }

  if (typeof setCurrentUser === "function") {
    setCurrentUser({
      email: user.email || "",
      photoURL: user.photoURL || "",
    });
  }

  const isAllowed = await ensureAdminAccess({
    user,
    mountSso,
    toast,
    onDenied,
    onPermissionsError: onDenied,
  });
  if (!isAllowed) return false;

  if (typeof onAuthorized === "function") {
    onAuthorized(user, reason);
  }
  return true;
};
