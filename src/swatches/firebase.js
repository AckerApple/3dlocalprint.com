import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
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

export const adminEmails = ["acker.dawn.apple@gmail.com", "fireguy92@gmail.com"];
const SWATCHES_DOC = doc(db, "swatches", "list");
const MANUFACTURERS_DOC = doc(db, "manufacturers", "list");
const ADMINS_DOC = doc(db, "admins", "list");

const isGmailEmail = (email = "") =>
  /@(gmail\.com|googlemail\.com)$/i.test(email);

const isAdmin = (user) =>
  Boolean(
    user &&
      isGmailEmail(user.email || "") &&
      adminEmails.includes(user.email || "")
  );

const signIn = () => signInWithPopup(auth, provider);
const signOutUser = () => signOut(auth);
const onAuthChanged = (callback) => onAuthStateChanged(auth, callback);

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
  isAdmin,
  signIn,
  signOutUser,
  onAuthChanged,
  loadSwatches,
  saveSwatches,
  loadManufacturers,
  subscribeManufacturers,
  saveManufacturers,
  subscribeAdmins,
  saveAdmins,
};
