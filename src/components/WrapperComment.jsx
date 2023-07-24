import styles from "../styles/Comments.module.css";
import { AiFillDelete } from "react-icons/ai";
import BtnDeleteComments from "./BtnDeleteComments";

function WrapperComment({
  children,
  comment,
  datosRest,
  countAnswers,
  getAnswers,
}) {
  const [userAuth, deleteComment, reply] = datosRest;
  const {
    content,
    userCom: { email, uid },
  } = comment;

  return (
    <div>
      <div className={styles.comment}>
        <div className={styles.info}>
          <div className={styles.userInfo}>{email}</div>
          <div className={styles.btnReply}>
            <button onClick={reply}>Reply</button>
            {userAuth.uid === uid ? (
              <BtnDeleteComments actionDelete={deleteComment}>
                <AiFillDelete style={{ color: "red" }} />
              </BtnDeleteComments>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className={styles.content}>{content}</div>
        <button className={styles.btnViewAnswers} onClick={getAnswers}>
          {countAnswers && `Vew Answers (${countAnswers})`}
        </button>
        {children}
      </div>
    </div>
  );
}

export default WrapperComment;
