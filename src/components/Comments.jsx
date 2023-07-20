import styles from "../styles/Comments.module.css";
import Comment from "./Comment";
import BtnSeeMore from "./BtnSeeMore";
import useComments from "../hooks/useComments";
import { useContext } from "react";
import { ContextComments } from "../context/CommentsContext";
import LoadingSeemore from "./LoadingSeemore";
import LayoutLoading from "../layout/LayoutLoading";

export default function Comments({ userAuth, feedback }) {
  const { comments, deleteCom, loading, count } = useComments(
    feedback,
    userAuth
  );
  const { loadingNext, getNextComms } = useContext(ContextComments);

  return (
    <div className={styles.contCom}>
      {count && (
        <h3 className={styles.title}>{(count && count) || 0} Comments</h3>
      )}
      <div>
        {comments &&
          comments.map((com) => (
            <Comment
              key={com.idDoc}
              comment={com}
              deleteCom={deleteCom}
              userAuth={userAuth}
            />
          ))}
        {comments && comments.length > 2 ? (
          <LayoutLoading>
            {loadingNext ? (
              <LoadingSeemore />
            ) : (
              <BtnSeeMore seeMore={getNextComms} />
            )}
          </LayoutLoading>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
