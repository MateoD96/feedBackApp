import styles from "../styles/SuggestionPage.module.css";
import { Link } from "react-router-dom";
export default function HeaderFeedback({ categorieFeed, userInfo, userAuth }) {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.back}>
          <Link to={`/feedback/${categorieFeed}`}>Go Back</Link>
        </div>
        {userInfo && userInfo.idUser === userAuth.uid ? (
          <div className={styles.btnEdit}>
            <Link>Edit Feedback</Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
