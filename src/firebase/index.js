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
  orderBy,
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

let lastVisible = null;
export function getSuggestions() {
  const refColl = collection(db, "suggestions");

  const getAllSuggestions = async () => {
    const q = query(refColl, orderBy("title"), limit(5));
    const querySnapshot = await getDocs(q);
    const data = await printData(querySnapshot);
    return data;
  };

  const getFilterSuggestions = async (filter) => {
    const q = query(refColl, where("categorie", "==", filter), limit(5));
    const querySnapshot = await getDocs(q);
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
      lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  const getNext = async (filter) => {
    if (lastVisible) {
      if (filter === "all") {
        const nextDatAll = query(
          refColl,
          orderBy("title"),
          startAfter(lastVisible),
          limit(5)
        );
        const querySnapshot = await getDocs(nextDatAll);
        const data = await printData(querySnapshot);
        return data;
      }
      const nextDatFilter = query(
        refColl,
        where("categorie", "==", filter),
        orderBy("title"),
        startAfter(lastVisible),
        limit(5)
      );
      const qs = await getDocs(nextDatFilter);
      const dat = await printData(qs);
      return dat;
    }
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
    return {
      idDoc: res.id,
      ...res.data(),
    };
  } catch (err) {
    console.error(err);
  }
}

//Subcollection comments
export async function insertComment(comment, idSuggestion) {
  try {
    const suggestionsRef = collection(db, "suggestions");
    const docRef = doc(suggestionsRef, idSuggestion);
    const commentsRef = collection(docRef, "comments");
    const res = await addDoc(commentsRef, comment);
    return res.id ? res.id : null;
  } catch (err) {
    console.error(err);
  }
}

export async function getComments(idSuggestion) {
  const dat = [];
  try {
    const suggestionsRef = collection(db, "suggestions");
    const docRef = doc(suggestionsRef, idSuggestion);
    const commentsRef = collection(docRef, "comments");
    const querySnapshot = await getDocs(commentsRef);
    querySnapshot.forEach((doc) => {
      const obj = { ...doc.data(), idDoc: doc.id };
      dat.push(obj);
    });
    return dat;
  } catch (err) {
    console.error(err);
  }
}

//Sub collection answer
export async function insertRespComment(resp, idComment, idSuggestion) {
  try {
    const suggestionsRef = collection(db, "suggestions");
    const docRef = doc(suggestionsRef, idSuggestion);
    const commentsRef = collection(docRef, "comments");
    const docAnswer = doc(commentsRef, idComment);
    const answerRef = collection(docAnswer, "answer");
    const res = await addDoc(answerRef, resp);
    return res.id ? res.id : null;
  } catch (err) {
    console.error(err);
  }
}
