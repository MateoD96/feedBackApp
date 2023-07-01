import FormLoginRegister from "./FormLoginRegister";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const fnLogin = async ({ email, password }) => {
    const resp = await signInWithEmailAndPassword(auth, email, password);
    if (resp.user) {
      navigate("/feedback/all");
    }
  };
  return (
    <FormLoginRegister action={{ fnAction: fnLogin, actionStr: "login" }} />
  );
}
