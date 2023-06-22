import { useState } from "react";
import styles from "../styles/Comments.module.css";
import { Answer } from "./index";

export function Comment({ comment }) {
  const {
    content,
    userCom: { email },
  } = comment;
  const [resp, setResp] = useState(null);

  const reply = () => {
    setResp(comment);
  };

  return (
    <>
      <div className={styles.comment}>
        <div className={styles.info}>
          <div className={styles.userInfo}>{email}</div>
          <div className={styles.btnReply}>
            <button onClick={reply}>Reply</button>
          </div>
        </div>
        <div className={styles.content}>{content}</div>
      </div>
      {resp && <Answer resp={resp} setResp={setResp} />}
    </>
  );
}
