import { ContextComments } from "../context/CommentsContext";
import { useEffect, useContext, useState } from "react";
import { getComments, getCountComments, deleteComment } from "../firebase";
import useGetData from "./useGetData";

function useComments(feedback) {
  const { idDoc } = feedback;
  const [data, loading] = useGetData(idDoc, getComments);
  const [count, setCount] = useState(null);
  const { comments, setComments } = useContext(ContextComments);

  const deleteCom = async (comment) => {
    const { idFeedback, idDoc } = comment;
    await deleteComment(idFeedback, idDoc);
    setComments(() => comments.filter((comm) => comm.idDoc !== idDoc));
    location.reload();
  };

  useEffect(() => setComments(data), [data]);

  useEffect(() => {
    async function getCount() {
      const count = await getCountComments(idDoc);
      if (count) setCount(count);
    }
    if (idDoc) {
      getCount();
    }
  }, [idDoc]);

  return { comments, deleteCom, loading, count };
}

export default useComments;
