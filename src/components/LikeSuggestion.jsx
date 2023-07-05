import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import styles from "../styles/Suggestion.module.css";

export default function LikeSuggestion({ userAuth, likes }) {
  return (
    <div className={styles.likes}>
      <div className={styles.btnLike}>
        <AiOutlineLike className={styles.icon} />
      </div>
    </div>
  );
}
