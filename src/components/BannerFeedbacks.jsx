import styles from "../styles/BannerFeedbacks.module.css";
import OrderSuggestions from "../components/OrderSuggestions";
import BtnAddFeedback from "../components/BtnAddFeedback";
import { HiLightBulb } from "react-icons/hi";
import { useContext } from "react";
import ContextSuggestions from "../context/SuggestionsContext";

export default function BannerFeedbacks() {
  const { suggestions } = useContext(ContextSuggestions);

  return (
    <div className={styles.cont}>
      <div className={styles.layout}>
        <div className={styles.title}>
          <HiLightBulb className={styles.icon} />
          <span>{suggestions.length !== 0 ? suggestions.length : 0}</span>
          <h2>Suggestions</h2>
        </div>
        <OrderSuggestions />
        <BtnAddFeedback />
      </div>
    </div>
  );
}
