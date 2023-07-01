import styles from "../styles/Navigations.module.css";
import { RiCloseCircleLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export default function MenuMobile({ open, fnClose, boards }) {
  return (
    <div
      className={
        open
          ? `${styles.mobileWindow} ${styles.activeWindow}`
          : styles.mobileWindow
      }
    >
      <div className={styles.close} onClick={() => fnClose()}>
        <RiCloseCircleLine />
      </div>
      <div className={styles.contLinks}>
        <nav>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
            to={"/feedback/all"}
          >
            All
          </NavLink>
          {boards &&
            boards.map((b, i) => (
              <NavLink
                key={i}
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
                to={`/feedback/${b.title}`}
              >
                {b.title}
              </NavLink>
            ))}
        </nav>
      </div>
    </div>
  );
}
