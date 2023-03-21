import styles from "../styles/Navigations.module.css";
import { NavLink } from "react-router-dom";

export function NavigationTablet({ boards }) {
  return (
    <div className={styles.contMenuT}>
      <div className={styles.containerTable}>
        <div className={styles.fmBanner}>
          <div className={styles.fmBannerTitle}>
            <h2>Frontend Mentor</h2>
            <p>Feedback Board</p>
          </div>
        </div>
        <div className={styles.navTable}>
          <nav>
            <NavLink
              to={"/feedback/all"}
              className={({ isActive }) =>
                isActive
                  ? `${styles.activeLinkT} ${styles.linkT}`
                  : styles.linkT
              }
            >
              All
            </NavLink>
            {boards &&
              boards.map((b, i) => (
                <NavLink
                  key={i}
                  to={`/feedback/${b.title}`}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.activeLinkT} ${styles.linkT}`
                      : styles.linkT
                  }
                >
                  {b.title}
                </NavLink>
              ))}
          </nav>
        </div>
        <div className={styles.roadMap}></div>
      </div>
    </div>
  );
}
