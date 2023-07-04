import styles from "../styles/Comments.module.css";
import Comment from "./Comment";
import BtnSeeMore from "./BtnSeeMore";
import useComments from "../hooks/useComments";
import { useContext } from "react";
import { ContextComments } from "../context/CommentsContext";

export default function Comments({ userAuth, feedback }) {
  const { comments, loading } = useComments(feedback, userAuth);
  const { loadingNext, getNextComms } = useContext(ContextComments);
  return (
    <div className={styles.contCom}>
      {comments && <h3 className={styles.title}>{comments.length} Comments</h3>}
      <div>
        {comments &&
          comments.map((com) => <Comment key={com.idDoc} comment={com} />)}
        {comments && comments.length > 2 ? (
          <BtnSeeMore seeMore={getNextComms} />
        ) : (
          ""
        )}
        {loadingNext && <h3>Cargando...</h3>}
      </div>
    </div>
  );
}
