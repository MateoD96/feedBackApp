import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import {
  doc,
  getDoc,
  collection,
  getDocs,
  where,
  getFirestore,
  setDoc,
  query,
  addDoc,
  limit,
  startAfter,
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

export async function getData(coll) {
  const dataArr = [];
  try {
    const refColl = collection(db, coll);
    const resp = await getDocs(refColl);
    resp.forEach((dat) => {
      const newObj = { ...dat.data(), idDoc: dat.id };
      dataArr.push(newObj);
    });
    return dataArr;
  } catch (err) {
    console.error(err);
  }
}

export async function createSuggestion(data) {
  try {
    const collRef = collection(db, "suggestions");
    const resp = await addDoc(collRef, data);
    return resp ? resp.id : null;
  } catch (err) {
    console.error(err);
  }
}

export function getSuggestions() {
  const refColl = collection(db, "suggestions");
  let lastVisible;

  const getAllSuggestions = async () => {
    const q = query(refColl, limit(5));
    const querySnapshot = await getDocs(q);
    //referecnia al ultimo elemento de la consulta
    lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
    const data = await printData(querySnapshot);
    return data;
  };

  const getFilterSuggestions = async (filter) => {
    const q = query(refColl, where("categorie", "==", filter), limit(10));
    const querySnapshot = await getDocs(q);
    lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
    const data = await printData(querySnapshot);
    return data;
  };

  const printData = async (querySnapshot) => {
    const data = [];
    try {
      querySnapshot.forEach((objDat) => {
        const newObj = { ...objDat.data(), idDoc: objDat.id };
        data.push(newObj);
      });
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  const getNext = async () => {
    const nextDat = query(refColl, startAfter(lastVisible), limit(10));
    const querySnapshot = await getDocs(nextDat);
    const data = await printData(querySnapshot);
    return data;
  };

  return {
    getAllSuggestions,
    getFilterSuggestions,
    getNext,
  };
}

export async function getSuggestion(idDoc) {
  try {
    const refD = doc(db, "suggestions", idDoc);
    const res = await getDoc(refD);
    return res.data();
  } catch (err) {
    console.error(err);
  }
}
