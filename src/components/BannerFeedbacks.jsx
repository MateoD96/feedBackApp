import styles from "../styles/BannerFeedbacks.module.css";
import { OrderSuggestions, BtnAddFeedback } from "./index";

export function BannerFeedbacks() {
  return (
    <div className={styles.cont}>
      <div className={styles.layout}>
        <div className={styles.title}>
          <h2>Suggestions</h2>
        </div>
        <OrderSuggestions />
        <BtnAddFeedback />
      </div>
    </div>
  );
}
