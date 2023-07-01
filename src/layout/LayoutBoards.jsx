import useFetchFirestore from "../hooks/useFetchFirestore";
import BannerFeedbacks from "../components/BannerFeedbacks";
import NavigationBoards from "../components/NavigationBoards";
import styles from "../styles/LayoutBoards.module.css";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function LayoutBoards({ children }) {
  const { data, loading } = useFetchFirestore("boards");
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth)
      .then(() => navigate("/"))
      .catch((err) => console.error(`No fue posible cerrar la sesión ${err}`));
  };

  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        {/* FIXME:  */}
        <button
          onClick={logout}
          style={{ display: "inline", margin: "1rem 0" }}
        >
          Logout
        </button>
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
