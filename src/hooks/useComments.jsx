import { ContextFeedback } from "../context/FeedbackContext";
import { useContext, useEffect } from "react";

function useComments(userAuth, feedback) {
  const { insertCommentFeedback, getCommentsFeedback, comments } =
    useContext(ContextFeedback);
  const { idDoc } = feedback;

  const insertCom = ({ comment }) => {
    insertCommentFeedback(comment, userAuth, idDoc);
  };

  const reply = (comment) => {
    setResp(comment);
  };

  useEffect(() => {
    getCommentsFeedback(idDoc);
  }, []);

  return [insertCom, comments, reply];
}

export default useComments;
