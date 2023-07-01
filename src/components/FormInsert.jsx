import useForm from "../hooks/useForm";
import styles from "../styles/SuggestionPage.module.css";

const initialForm = {
  comment: "",
};

export default function FormInsert({ insertCom }) {
  const validate = (values) => {
    const errors = {};
    if (values.comment === "") {
      errors.comment = "El campo no puede ir vacío";
    } else if (values.comment.length < 4) {
      errors.comment = "Campo Inválido";
    }
    return errors;
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    initialForm,
    validate,
    insertCom
  );

  return (
    <div className={styles.contInsert}>
      <h3 className={styles.title}>Add Comment</h3>
      <form onSubmit={handleSubmit}>
        <div className={styles.inpTxt}>
          <textarea
            onChange={handleChange}
            value={values.comment}
            name="comment"
            placeholder="Type your comment here"
          ></textarea>
          <div className={styles.error}>
            {errors.comment && "El campo no puede ir vacío"}
          </div>
        </div>
        <div className={styles.btnComment}>
          <p>250 Characters left</p>
          <input type="submit" value="Post Comment" />
        </div>
      </form>
    </div>
  );
}
