import styles from "../styles/SuggestionPage.module.css";
import { Link } from "react-router-dom";
import { Suggestion, Comments, InsertComment } from "./index";
import { useEffect, useState } from "react";
import { insertComment, getComments } from "../firebase";

export function Feedback({ feedback, userAuth }) {
  const { userInfo, idDoc } = feedback;
  const [comments, setComments] = useState([]);

  const insertCom = async (comment) => {
    const commentInsert = {
      /*id*/
      userCom: {
        email: userAuth.email,
        uid: userAuth.uid,
      },
      idFeedback: idDoc,
      content: comment,
    };
    const resp = await insertComment(commentInsert, idDoc);
    if (resp) {
      setComments([...comments, commentInsert]);
    }
  };

  const getCommentsFeedback = async () => {
    const res = await getComments(idDoc);
    if (res) console.log(res);
  };

  useEffect(() => {
    getCommentsFeedback();
  }, []);

  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <div className={styles.back}>
          <Link>Go Back</Link>
        </div>
        {userInfo.idUser === userAuth.uid ? (
          <div className={styles.btnEdit}>
            <Link>Edit Feedback</Link>
          </div>
        ) : null}
      </div>
      <Suggestion suggestion={feedback} userAuth={userAuth} />
      <Comments comments={comments} />
      <InsertComment insertCom={insertCom} />
    </div>
  );
}
