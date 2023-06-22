import { Comment } from "./index";
import styles from "../styles/Comments.module.css";

export function Comments({ comments, reply }) {
  return (
    <div className={styles.contCom}>
      {comments && <h3 className={styles.title}>{comments.length} Comments</h3>}
      <div>
        {comments &&
          comments.map((com) => (
            <Comment key={com.idDoc} comment={com} reply={reply} />
          ))}
      </div>
    </div>
  );
}
