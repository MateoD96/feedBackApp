import styles from "../styles/Comments.module.css";
import useForm from "../hooks/useForm";

const initialForm = {
  content: "",
};

export default function Reply({ resp, setResp, insertAnswer }) {
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

  const { values, errors, handleChange, handleSubmit } = useForm(
    initialForm,
    validate,
    insertAnswer
  );

  return (
    <div className={styles.resp}>
      <form onSubmit={handleSubmit}>
        <div className={styles.cont}>
          <div className={styles.contTxt}>
            <textarea
              onChange={handleChange}
              placeholder={`answer to ${email}`}
              name="content"
              value={values.content}
            ></textarea>
            <div className={styles.errorValidate}>
              {errors.content && errors.content}
            </div>
          </div>
          <div className={styles.btnsResp}>
            <div className={styles.btnCancel}>
              <button onClick={fnCancel}>Cancel</button>
            </div>
            <div className={styles.btnResp}>
              <input type="submit" value="Save" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
