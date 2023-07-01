import styles from "../styles/Suggestion.module.css";
import { Link } from "react-router-dom";
import LikeSuggestion from "./LikeSuggestion";

export default function Suggestion({ suggestion, userAuth }) {
  /* const { comments, loading } = useComments(suggestion, userAuth); */
  const { title, description, categorie, idDoc } = suggestion;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.descrip}>{description && description}</p>
        <Link to={`/feedback/${categorie}`}>{categorie}</Link>
      </div>
      <div className={styles.commentsLikes}>
        <div className={styles.comments}></div>
        {/*  <p>{comments && comments.length}</p> */}
        <LikeSuggestion userAuth={userAuth} />
        <Link to={`/feedback/suggestion/${idDoc}`}>View</Link>
      </div>
    </div>
  );
}
