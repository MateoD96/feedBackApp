import { ContextComments } from "../context/CommentsContext";
import { useEffect, useContext, useState } from "react";
import { getComments, getCountComments } from "../firebase";
import useGetData from "./useGetData";

function useComments(feedback) {
  const { idDoc } = feedback;
  const [data, loading] = useGetData(idDoc, getComments);
  const [count, setCount] = useState(null);
  const { comments, setComments } = useContext(ContextComments);

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

  return { comments, loading, count };
}

export default useComments;
