import styles from "../styles/Auth.module.css";
import useForm from "../hooks/useForm";
import validator from "validator";

const initialForm = {
  email: "",
  password: "",
};
export function FormLoginRegister({ action }) {
  const { fnAction, actionStr } = action;

  const isPasswordValid = (password) => {
    return (
      password.length >= 8 &&
      /[a-z]/.test(password) &&
      /[A-Z]/.test(password) &&
      /\d/.test(password) &&
      /[!@#$%^&*()_+={[}\]|\\:;"'<,>.?/]/.test(password)
    );
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "El email es obligatorio";
    } else if (!validator.isEmail(values.email)) {
      errors.email = "El email no es válido";
    }
    if (!isPasswordValid(values.password)) {
      errors.password = "El password no es valido";
    }
    return errors;
  };

  const { handleChange, handleSubmit, values, errors } = useForm(
    initialForm,
    validate,
    fnAction
  );

  return (
    <div className={styles.form}>
      <h2>{actionStr === "login" ? "Login" : "Register"}</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.contInp}>
          <label htmlFor="email">Email:</label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            value={values.email}
          />
          <div className={styles.error}>{errors.email && errors.email}</div>
        </div>
        <div className={styles.contInp}>
          <label htmlFor="password">Password:</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            id="password"
            value={values.password}
          />
          <div className={styles.error}>
            {errors.password && errors.password}
          </div>
        </div>
        <input
          type="submit"
          value={actionStr === "login" ? "Login" : "Registrar"}
        />
      </form>
    </div>
  );
}
