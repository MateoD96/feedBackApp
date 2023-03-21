import styles from "../styles/Navigations.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import useActive from "../hooks/useActive";
import { MenuMobile } from "./index";

export function NavigationMobile({ boards }) {
  const { fnOpen, fnClose, open } = useActive();

  return (
    <>
      <div className={styles.menuCont}>
        <div className={styles.container}>
          <div className={styles.mobileNav}>
            <div className={styles.mobileTitle}>
              <h1>Frontend Mentor</h1>
              <p>Feedback Board</p>
            </div>
            <div className={styles.btnMenu} onClick={() => fnOpen()}>
              <GiHamburgerMenu />
            </div>
          </div>
        </div>
      </div>
      <MenuMobile open={open} fnClose={fnClose} boards={boards} />
    </>
  );
}
