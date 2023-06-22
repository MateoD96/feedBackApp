import styles from "../styles/Comments.module.css";
import useForm from "../hooks/useForm";

const initialForm = {
  content: "",
};
export function Answer({ resp, setResp }) {
  const {
    userCom: { email },
  } = resp;

  const fnCancel = (e) => {
    e.preventDefault();
    setResp(null);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.content) {
      errors.content = "El campo no puede ir vacio";
    }
    return errors;
  };

  return (
    <div className={styles.resp}>
      <form>
        <textarea
          placeholder="respuesta"
          defaultValue={`answer to ${email}`}
        ></textarea>
        <div className={styles.btnsResp}>
          <div className={styles.btnCancel}>
            <button onClick={fnCancel}>Cancel</button>
          </div>
          <div className={styles.btnResp}>
            <input type="submit" value="Save" />
          </div>
        </div>
      </form>
    </div>
  );
}
