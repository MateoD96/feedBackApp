import { createContext, useState } from "react";
import { insertComment, getSuggestion, getComments } from "../firebase";

const ContextFeedback = createContext();

const FeedbackProvider = ({ children }) => {
  const [comments, setComments] = useState([]);
  const [feedback, setFeedback] = useState(null);

  const insertCommentFeedback = async (comment, userAuth, idDoc) => {
    const commentInsert = {
      /*id*/
      userCom: {
        email: userAuth.email,
        uid: userAuth.uid,
      },
      idFeedback: idDoc,
      content: comment,
    };
    const resp = await insertComment(commentInsert, idDoc);
    if (resp) {
      setComments([...comments, commentInsert]);
    }
  };

  const getFeedback = async (suggestion) => {
    const dat = await getSuggestion(suggestion);
    if (dat) setFeedback(dat);
  };

  const getCommentsFeedback = async (idDocFeedback) => {
    const commentsFeedb = await getComments(idDocFeedback);
    if (commentsFeedb) {
      setComments(commentsFeedb);
    }
  };

  const data = {
    insertCommentFeedback,
    getFeedback,
    getCommentsFeedback,
    feedback,
    comments,
  };

  return (
    <ContextFeedback.Provider value={data}>{children}</ContextFeedback.Provider>
  );
};

export default FeedbackProvider;
export { ContextFeedback };
