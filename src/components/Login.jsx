import { FormLoginRegister } from "./FormLoginRegister";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();

  const fnLogin = async ({ email, password }) => {
    const resp = await signInWithEmailAndPassword(auth, email, password);
    if (resp.user) {
      navigate("/feedback");
    }
  };
  return (
    <FormLoginRegister action={{ fnAction: fnLogin, actionStr: "login" }} />
  );
}
