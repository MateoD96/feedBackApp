import styles from "../styles/FormSuggestions.module.css";
import { ToastContainer, toast } from "react-toastify";
import FormSuggestions from "./FormSuggestions";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";
import { createSuggestion } from "../firebase";

export default function CreateSuggestion({ userAuth }) {
  const createNewSuggestion = async (data) => {
    const newSugg = {
      id: uuidv4(),
      ...data,
      userInfo: {
        idUser: userAuth.uid,
        username: userAuth.email,
      },
    };
    const res = await createSuggestion(newSugg);
    if (res) {
      toast.success(
        "Gracias por compartir tus sugerencias, las tomaremos en cuenta"
      );
    }
  };

  return (
    <>
      <div className={styles.layout}>
        <div className={styles.back}>
          <BiArrowBack />
          <Link to={"/feedback/all"}>Go Back</Link>
        </div>
        <FormSuggestions action={createNewSuggestion} />
      </div>
      <ToastContainer />
    </>
  );
}
