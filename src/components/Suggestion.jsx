import styles from "../styles/Suggestion.module.css";
import { Link } from "react-router-dom";
import LikeSuggestion from "./LikeSuggestion";
import { useEffect, useState, memo } from "react";
import { getCountComments } from "../firebase";

function Suggestion({ suggestion, userAuth, count = false }) {
  const { title, description, categorie, idDoc } = suggestion;
  const [countComms, setCountComms] = useState(null);

  useEffect(() => {
    const getCountComms = async () => {
      if (idDoc) {
        const comms = await getCountComments(idDoc);
        comms && setCountComms(comms);
      }
    };
    if (count) {
      getCountComms();
    }
  }, [count]);

  useEffect(() => {
    countComms
      ? (suggestion.countComms = countComms)
      : (suggestion.countComms = 0);
  }, [countComms, count]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.descrip}>{description && description}</p>
        <Link to={`/feedback/${categorie}`}>{categorie}</Link>
      </div>
      <div className={styles.commentsLikes}>
        <div className={styles.comments}>
          {(countComms && countComms) || ""}
        </div>
        <LikeSuggestion userAuth={userAuth} />
        <Link to={`/feedback/suggestion/${idDoc}`}>View</Link>
      </div>
    </div>
  );
}

export default memo(Suggestion);
