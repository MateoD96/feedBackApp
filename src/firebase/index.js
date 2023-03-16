import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import {
  doc,
  getDoc,
  collection,
  getDocs,
  where,
  getFirestore,
  setDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKECT,
  messagingSenderId: import.meta.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth();
const storage = getStorage(app);

export async function userExist(userId) {
  try {
    const refDoc = doc(db, "users", userId);
    const res = await getDoc(refDoc);
    return res.exists();
  } catch (err) {
    console.error(err);
  }
}

export async function existsUsername(username) {
  const users = [];
  try {
    const docsRef = collection(db, "users");
    const q = query(docsRef, where("username", "==", username));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      users.push(doc.data());
    });

    return users.length > 0 ? users[0].uid : null;
  } catch (err) {
    console.error(err);
  }
}

export async function registerNewUser(userId, data) {
  try {
    const collRef = collection(db, "users");
    const refDoc = doc(collRef, userId);
    await setDoc(refDoc, data);
  } catch (err) {
    console.error(err);
  }
}
