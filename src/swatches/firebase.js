import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithRedirect,
  getRedirectResult,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
  indexedDBLocalPersistence,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8oBLWyTpzWLLjWdZxo8YgQ1IcYICxdcU",
  authDomain: "threedlocalprint.firebaseapp.com",
  projectId: "threedlocalprint",
  storageBucket: "threedlocalprint.firebasestorage.app",
  messagingSenderId: "770972495364",
  appId: "1:770972495364:web:b1015eaaf0de32d9b84f51",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

const SWATCHES_DOC = doc(db, "swatches", "list");
const MANUFACTURERS_DOC = doc(db, "manufacturers", "list");
const ADMINS_DOC = doc(db, "admins", "list");

const normalizeEmail = (email = "") => email.trim().toLowerCase();

const isIOS = () =>
  typeof navigator !== "undefined" &&
  /iPad|iPhone|iPod/i.test(navigator.userAgent || "");

const setBestPersistence = async () => {
  const candidates = [
    { key: "indexedDB", value: indexedDBLocalPersistence },
    { key: "local", value: browserLocalPersistence },
    { key: "session", value: browserSessionPersistence },
  ];
  let lastError = null;

  for (const candidate of candidates) {
    try {
      await setPersistence(auth, candidate.value);
      return { persistence: candidate.key, error: null };
    } catch (error) {
      lastError = error;
      console.warn(`Failed to set ${candidate.key} persistence`, error);
    }
  }

  return { persistence: "none", error: lastError };
};

const prepareAuth = async () => {
  let redirectError = null;
  let redirectResult = null;
  const persistence = await setBestPersistence();

  try {
    redirectResult = await getRedirectResult(auth);
  } catch (error) {
    redirectError = error;
    console.error("Firebase redirect sign-in failed", error);
  }

  return { redirectError, redirectResult, persistence };
};

const signIn = () =>
  isIOS()
    ? signInWithRedirect(auth, provider)
    : signInWithPopup(auth, provider);
const signOutUser = () => signOut(auth);
const onAuthChanged = (callback) => onAuthStateChanged(auth, callback);
const getCurrentUser = () => auth.currentUser;

const loadSwatches = async () => {
  const snapshot = await getDoc(SWATCHES_DOC);
  if (!snapshot.exists()) {
    return null;
  }
  const data = snapshot.data();
  return Array.isArray(data.items) ? data.items : [];
};

const saveSwatches = (items) =>
  setDoc(
    SWATCHES_DOC,
    {
      items,
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );

const loadManufacturers = async () => {
  const snapshot = await getDoc(MANUFACTURERS_DOC);
  if (!snapshot.exists()) {
    return null;
  }
  const data = snapshot.data();
  return Array.isArray(data.items) ? data.items : [];
};

const subscribeManufacturers = (callback) =>
  onSnapshot(
    MANUFACTURERS_DOC,
    (snapshot) => {
      if (!snapshot.exists()) {
        callback(null);
        return;
      }
      const data = snapshot.data();
      callback(Array.isArray(data.items) ? data.items : []);
    },
    (error) => {
      console.error("Failed to subscribe to manufacturers", error);
      callback(null);
    }
  );

const subscribeAdmins = (callback) =>
  onSnapshot(
    ADMINS_DOC,
    (snapshot) => {
      if (!snapshot.exists()) {
        callback(null);
        return;
      }
      const data = snapshot.data();
      callback(Array.isArray(data.items) ? data.items : []);
    },
    (error) => {
      console.error("Failed to subscribe to admins", error);
      callback(null);
    }
  );

const saveManufacturers = (items) =>
  setDoc(
    MANUFACTURERS_DOC,
    {
      items,
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );

const loadAdmins = async () => {
  const snapshot = await getDoc(ADMINS_DOC);
  if (!snapshot.exists()) {
    return [];
  }
  const data = snapshot.data();
  return Array.isArray(data.items) ? data.items : [];
};

const isAdminEmail = async (email = "") => {
  const list = await loadAdmins();
  return list.map(normalizeEmail).includes(normalizeEmail(email));
};

const saveAdmins = (items) =>
  setDoc(
    ADMINS_DOC,
    {
      items,
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );

export {
  auth,
  isAdminEmail,
  prepareAuth,
  signIn,
  signOutUser,
  onAuthChanged,
  getCurrentUser,
  loadSwatches,
  saveSwatches,
  loadManufacturers,
  subscribeManufacturers,
  saveManufacturers,
  subscribeAdmins,
  saveAdmins,
  loadAdmins,
};
