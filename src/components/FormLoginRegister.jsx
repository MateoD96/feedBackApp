import styles from "../styles/Auth.module.css";
import useForm from "../hooks/useForm";

const initialForm = {
  email: "",
  password: "",
};

export function FormLoginRegister({ action }) {
  const { handleChange, handleBlur, form, objValidate } = useForm(initialForm);
  const { fnAction, actionStr } = action;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (objValidate.password && objValidate.email) {
      fnAction(form);
    }
  };

  return (
    <div className={styles.form}>
      <h2>{actionStr === "login" ? "Login" : "Register"}</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.contInp}>
          <label htmlFor="email">Email:</label>
          <input
            onBlur={handleBlur}
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            value={form.email}
          />
        </div>
        <div className={styles.contInp}>
          <label htmlFor="password">Password:</label>
          <input
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            name="password"
            id="password"
            value={form.password}
          />
        </div>
        <input
          type="submit"
          value={actionStr === "login" ? "Login" : "Registrar"}
        />
      </form>
    </div>
  );
}
