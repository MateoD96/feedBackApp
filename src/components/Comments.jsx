import styles from "../styles/Comments.module.css";
import Comment from "./Comment";
import useComments from "../hooks/useComments";
import { useContext } from "react";
import { ContextComments } from "../context/CommentsContext";
import SeeMore from "./reuse/SeeMore";

function Comments({ userAuth, feedback }) {
  const { deleteCom, loading, count, comments } = useComments(
    feedback,
    userAuth
  );
  const { loadingNext, getNextComms } = useContext(ContextComments);

  console.log("render..");
  return (
    <div className={styles.contCom}>
      {count && (
        <h3 className={styles.title}>{(count && count) || 0} Comments</h3>
      )}
      {comments &&
        comments.map((comment) => (
          <Comment
            key={comment.idDoc || comment.id}
            comment={comment}
            deleteCom={deleteCom}
            userAuth={userAuth}
          />
        ))}
      <SeeMore
        loading={loadingNext}
        count={count}
        data={comments}
        fnSeemore={getNextComms}
      />
    </div>
  );
}

export default Comments;
