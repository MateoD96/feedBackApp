import styles from "../styles/Buttons.module.css";

export default function BtnSeeMore({ seeMore }) {
  return (
    <button onClick={seeMore} className={styles.seeMore}>
      Ver Más
    </button>
  );
}
