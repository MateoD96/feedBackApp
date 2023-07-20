import { db } from "./index";
import {
  getDocs,
  collection,
  doc,
  query,
  addDoc,
  limit,
  getCountFromServer,
} from "firebase/firestore";

let lastVisible;
export function operationsAnswers(idSuggestion, idComment) {
  const suggestionsRef = collection(db, "suggestions");
  const docRef = doc(suggestionsRef, idSuggestion);
  const commentsRef = collection(docRef, "comments");
  const docAnswer = doc(commentsRef, idComment);
  const answerRef = collection(docAnswer, "answers");

  async function insertRespComment(resp) {
    try {
      const res = await addDoc(answerRef, resp);
      return res.id ? res.id : null;
    } catch (err) {
      console.error(err);
    }
  }

  async function getAnswersComment() {
    const answers = [];
    const qry = query(answerRef, limit(3));
    const querySnapshot = await getDocs(qry);
    querySnapshot.forEach((answer) => {
      const objAns = { ...answer.data(), idDocResp: answer.id };
      answers.push(objAns);
    });
    if (querySnapshot.size !== 0) {
      lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
    }
    return answers;
  }

  async function getCountAnswers() {
    try {
      const snapshot = await getCountFromServer(answerRef);
      return snapshot.data().count;
    } catch (err) {
      console.error(err);
    }
  }

  return {
    insertRespComment,
    getAnswersComment,
    getCountAnswers,
  };
}
