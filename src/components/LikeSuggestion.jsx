import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import styles from "../styles/Suggestion.module.css";

export function LikeSuggestion({ userAuth, likes }) {
  return (
    <div className={styles.likes}>
      <div className={styles.btnLike}>
        {/*  <AiFillLike className={styles.icon} /> */}
        <AiOutlineLike className={styles.icon} />
        <span>{!likes && 0}</span>
      </div>
    </div>
  );
}
