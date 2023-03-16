import { FormLoginRegister } from "./FormLoginRegister";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export function Register() {
  const navigate = useNavigate();

  const fnRegister = async ({ email, password }) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res.user) {
        navigate("/register");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <FormLoginRegister
      action={{ fnAction: fnRegister, actionStr: "register" }}
    />
  );
}
