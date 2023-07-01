import { useState, useEffect } from "react";
import { getComments, insertComment, getNextComments } from "../firebase";
import useGetData from "./useGetData";

function useComments(feedback, userAuth) {
  const [comments, setComments] = useState([]);
  const { idDoc } = feedback;
  const [data, loading] = useGetData(idDoc, getComments);
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

  useEffect(() => setComments(data), [data]);

  return { insertComments, getNextComms, comments, loading, loadingNext };
}

export default useComments;
