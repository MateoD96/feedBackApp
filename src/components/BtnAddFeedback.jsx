import styles from "../styles/BannerFeedbacks.module.css";
import { useNavigate } from "react-router";

export default function BtnAddFeedback() {
  const navigate = useNavigate();

  const redirectToCreatePage = () => navigate("/feedback/create");

  return (
    <div className={styles.btnAdd}>
      <button onClick={redirectToCreatePage}> + Add Feedback</button>
    </div>
  );
}
