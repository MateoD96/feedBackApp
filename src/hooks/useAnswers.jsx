import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { operationsAnswers } from "../firebase/answers";

function useAnswers(comment, userAuth) {
  const [answers, setAnswers] = useState([]);
  const [countAnswers, setCountAnswers] = useState(null);
  const [loadingsAnswers, setLoadingsAnswers] = useState(null);
  const {
    idDoc,
    idFeedback,
    userCom: { email },
  } = comment;

  const { insertRespComment, getCountAnswers, getAnswersComment } =
    operationsAnswers(idFeedback, idDoc);

  const insertAnswers = async ({ content }) => {
    const objAnswer = {
      id: uuidv4(),
      idFeedback,
      idDocComm: idDoc,
      idDocResp: comment.idResp || null,
      content,
      userBy: userAuth.email,
      answerTo: email || emailResp,
    };
    const res = await insertRespComment(objAnswer);
    if (res) {
      setAnswers((answers) => [...answers, objAnswer]);
    }
  };

  const getAnswers = async () => {
    setLoadingsAnswers(true);
    const res = await getAnswersComment();
    if (res) {
      setAnswers(res);
    }
    setLoadingsAnswers(false);
  };

  //TODO:
  const getNextAnswers = async () => {};

  useEffect(() => {
    const getCount = async () => {
      const count = await getCountAnswers();
      if (count) {
        setCountAnswers(count);
      }
    };
    getCount();
  }, [comment, userAuth]);

  return [answers, countAnswers, insertAnswers, getAnswers, loadingsAnswers];
}

export default useAnswers;
