import { useContext } from "react";
import styles from "../styles/BannerFeedbacks.module.css";
import ContextSuggestions from "../context/SuggestionsContext";

export default function OrderSuggestions() {
  const { orderSuggestions } = useContext(ContextSuggestions);

  const handleChange = (e) => {
    orderSuggestions(e.target.value);
  };

  return (
    <div className={styles.order}>
      <span>Sort By :</span>
      <select onChange={handleChange} name="orderby">
        <option value="Most Comments" defaultValue>
          Most Comments
        </option>
        <option value="Less Comments">Less Comments</option>
      </select>
    </div>
  );
}
