import styles from "../styles/SuggestionPage.module.css";
import { Suggestion, Comments, FormInsert, HeaderFeedback } from "./index";
import useComments from "../hooks/useComments";

export function Feedback({ userAuth, feedback }) {
  const [insertCom, comments, reply] = useComments(userAuth, feedback);
  const { userInfo, categorie } = feedback;

  return (
    <div className={styles.layout}>
      <HeaderFeedback
        categorieFeed={categorie}
        userInfo={userInfo}
        userAuth={userAuth}
      />
      <Suggestion suggestion={feedback} userAuth={userAuth} />
      <Comments comments={comments} reply={reply} />
      <FormInsert insertCom={insertCom} />
    </div>
  );
}
