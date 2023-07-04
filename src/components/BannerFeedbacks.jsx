import styles from "../styles/BannerFeedbacks.module.css";
import OrderSuggestions from "../components/OrderSuggestions";
import BtnAddFeedback from "../components/BtnAddFeedback";
import { HiLightBulb } from "react-icons/hi";
import { useContext, useEffect } from "react";
import ContextSuggestions from "../context/SuggestionsContext";

export default function BannerFeedbacks({ board }) {
  const { getCount, count } = useContext(ContextSuggestions);

  useEffect(() => {
    getCount(board);
  }, [board]);

  return (
    <div className={styles.cont}>
      <div className={styles.layout}>
        <div className={styles.title}>
          <HiLightBulb className={styles.icon} />
          <span>{count && count}</span>
          <h2>Suggestions</h2>
        </div>
        <OrderSuggestions />
        <BtnAddFeedback />
      </div>
    </div>
  );
}
