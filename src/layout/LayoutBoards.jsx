import useFetchFirestore from "../hooks/useFetchFirestore";
import { BannerFeedbacks, NavigationBoards } from "../components";
import styles from "../styles/LayoutBoards.module.css";

function LayoutBoards({ children }) {
  const { data, loading } = useFetchFirestore("boards");

  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <NavigationBoards boards={data} />
        <div>
          <BannerFeedbacks />
          {children}
        </div>
      </div>
    </div>
  );
}

export default LayoutBoards;
