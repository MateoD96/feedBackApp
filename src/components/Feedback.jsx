import styles from "../styles/SuggestionPage.module.css";
import Suggestion from "./Suggestion";
import Comments from "./Comments";
import FormInsert from "./FormInsert";
import HeaderFeedback from "./HeaderFeedback";
import useComments from "../hooks/useComments";

export default function Feedback({ userAuth, feedback }) {
  const { comments, insertComments, getNextComms, loading, loadingNext } =
    useComments(feedback, userAuth);
  const { userInfo, categorie } = feedback;

  return (
    <div className={styles.layout}>
      <HeaderFeedback
        categorieFeed={categorie}
        userInfo={userInfo}
        userAuth={userAuth}
      />
      <Suggestion suggestion={feedback} userAuth={userAuth} />
      <Comments
        comments={comments}
        seeMore={getNextComms}
        loadingNext={loadingNext}
      />
      <FormInsert insertCom={insertComments} />
    </div>
  );
}
