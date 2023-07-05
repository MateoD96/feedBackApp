import { createContext, useState } from "react";
import { insertComment, getNextComments } from "../firebase";

const ContextComments = createContext();

function ProviderComments({ children, userAuth, feedback }) {
  const { idDoc } = feedback;
  const [comments, setComments] = useState(null);
  const [loadingNext, setLoadingNext] = useState(false);

  const insertComments = async ({ comment }) => {
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

  const getNextComms = async () => {
    setLoadingNext(true);
    const comms = await getNextComments(idDoc);
    if (comms) {
      setComments([...comments, ...comms]);
    }
    setLoadingNext(false);
  };

  const data = {
    comments,
    loadingNext,
    setComments,
    insertComments,
    getNextComms,
  };

  return (
    <ContextComments.Provider value={data}>{children}</ContextComments.Provider>
  );
}

export default ProviderComments;
export { ContextComments };
