import styles from "../styles/SuggestionPage.module.css";
import Suggestion from "./Suggestion";
import Comments from "./Comments";
import FormInsert from "./FormInsert";
import HeaderFeedback from "./HeaderFeedback";
import { useContext } from "react";
import { ContextComments } from "../context/CommentsContext";

export default function Feedback({ userAuth, feedback }) {
  const { insertComments } = useContext(ContextComments);
  return (
    <div className={styles.layout}>
      <HeaderFeedback userAuth={userAuth} feedback={feedback} />
      <Suggestion suggestion={feedback} userAuth={userAuth} />
      <Comments userAuth={userAuth} feedback={feedback} />
      <FormInsert insertCom={insertComments} />
    </div>
  );
}
