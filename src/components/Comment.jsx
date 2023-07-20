import { useState } from "react";
import Reply from "./Reply";
import useAnswers from "../hooks/useAnswers";
import WrapperComment from "./WrapperComment";
import Answers from "./Answers";

export default function Comment({ comment, deleteCom, userAuth }) {
  const [resp, setResp] = useState(null);
  const [answers, countAnswers, insertAnswer, getAnswers, loadingAnswers] =
    useAnswers(comment, userAuth);

  const reply = () => setResp(comment);
  const deleteComment = () => deleteCom(comment);

  return (
    <>
      <WrapperComment
        datosRest={[comment, userAuth, deleteComment, reply]}
        countAnswers={countAnswers}
        getAnswers={getAnswers}
      >
        <Answers answers={answers} loadingAnswers={loadingAnswers} />
      </WrapperComment>
      {resp && (
        <Reply resp={resp} setResp={setResp} insertAnswer={insertAnswer} />
      )}
    </>
  );
}
