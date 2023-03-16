import styles from "../styles/Auth.module.css";

function LoginRegisterLayout({ children, setAction }) {
  return (
    <div className={styles.layout}>
      <div className={styles.contForm}>
        {children}
        <div className={styles.btns}>
          <button onClick={(e) => setAction("login")}>Login</button>
          <button onClick={(e) => setAction("register")}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default LoginRegisterLayout;
