import styles from "../styles/Comments.module.css";
import Comment from "./Comment";
import BtnSeeMore from "./BtnSeeMore";

export default function Comments({ comments, seeMore, loadingNext }) {
  return (
    <div className={styles.contCom}>
      {comments && <h3 className={styles.title}>{comments.length} Comments</h3>}
      <div>
        {comments &&
          comments.map((com) => <Comment key={com.idDoc} comment={com} />)}
        {comments && comments.length > 2 ? (
          <BtnSeeMore seeMore={seeMore} />
        ) : (
          ""
        )}
        {loadingNext && <h3>Cargando...</h3>}
      </div>
    </div>
  );
}
