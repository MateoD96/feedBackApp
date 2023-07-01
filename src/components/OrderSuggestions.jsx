import styles from "../styles/BannerFeedbacks.module.css";

export default function OrderSuggestions() {
  return (
    <div className={styles.order}>
      <span>Sort By :</span>
      <select name="orderby">
        <option value="Most Upvotes" defaultValue>
          Most Upvotes
        </option>
        <option value="Less Upvotes">Less Upvotes</option>
      </select>
    </div>
  );
}
