import { ContextComments } from "../context/CommentsContext";
import { useEffect, useContext } from "react";
import { getComments } from "../firebase";
import useGetData from "./useGetData";

function useComments(feedback) {
  const { idDoc } = feedback;
  const [data, loading] = useGetData(idDoc, getComments);
  const { comments, setComments } = useContext(ContextComments);

  useEffect(() => setComments(data), [data]);

  return { comments, loading };
}

export default useComments;
