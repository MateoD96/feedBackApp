import { ContextComments } from "../context/CommentsContext";
import { useEffect, useContext, useState } from "react";
import { getComments, getCountComments, deleteComment } from "../firebase";
import useGetData from "./useGetData";

function useComments(feedback) {
  const { idDoc } = feedback;
  const [data, loading] = useGetData(idDoc, getComments);
  const { comments, setComments, setCount, count } =
    useContext(ContextComments);

  const deleteCom = async (comment) => {
    const { idFeedback, idDoc } = comment;
    await deleteComment(idFeedback, idDoc);
    setComments(() => comments.filter((comm) => comm.idDoc !== idDoc));
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
  }, [comments]);

  return { comments, deleteCom, loading, count };
}

export default useComments;
