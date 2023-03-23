import styles from "../styles/FormSuggestions.module.css";
import { IoAdd } from "react-icons/io5";
import { GrEdit } from "react-icons/gr";
import validator from "validator";
import useForm from "../hooks/useForm";

const initialForm = {
  title: "",
  description: "",
  categorie: "",
};

export function FormSuggestions({ datEdit = null, action }) {
  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "El titulo  no puede quedar vacío";
    } else if (values.title.length < 3) {
      errors.title = "El titulo no es valido";
    }
    if (!values.description) {
      errors.description = "Debes poner una descripción";
    } else if (!validator.isLength(values.description, { min: 10, max: 200 })) {
      errors.description = "La descripción no es valida";
    }
    if (!values.categorie) {
      errors.categorie = "Debes seleccionar una categoria";
    }
    return errors;
  };

  const { handleSubmit, handleChange, resetForm, values, errors } = useForm(
    initialForm,
    validate,
    action
  );

  return (
    <div className={styles.contForm}>
      <div className={styles.icon}>{datEdit ? <GrEdit /> : <IoAdd />}</div>
      <div className={styles.title}>
        <h2>{datEdit ? "Editing.." : "Create New Feedback"}</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className={styles.contInpt}>
            <label htmlFor="title">Title Feedback:</label>
            <input
              onChange={handleChange}
              type="text"
              name="title"
              value={values.title}
            />
            <div className={styles.error}>{errors.title && errors.title}</div>
          </div>
          <div className={`${styles.contSelect} ${styles.contInpt}`}>
            <label htmlFor="categorie">Categorie:</label>
            <select onChange={handleChange} name="categorie" id="categorie">
              <option value="" defaultValue>
                Select
              </option>
              <option value="UX">UI</option>
              <option value="UI">UX</option>
              <option value="Feature">Feature</option>
              <option value="Bug">Bug</option>
              <option value="Enhancement">Enhancement</option>
            </select>
            <div className={styles.error}>
              {errors.categorie && errors.categorie}
            </div>
          </div>
          <div className={styles.contInpt}>
            <label htmlFor="description">Description:</label>
            <textarea
              onChange={handleChange}
              name="description"
              id="description"
              value={values.description}
            ></textarea>
            <div className={styles.error}>
              {errors.description && errors.description}
            </div>
          </div>
          <div className={styles.btns}>
            <input type="submit" value="+ Add Feedback" />
            <input onClick={resetForm} type="reset" value="Cancel" />
          </div>
        </form>
      </div>
    </div>
  );
}
