import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { userExist } from "../firebase";

export default function AuthProvider({ authActions }) {
  const { isLogged, notLogged, pendingRegister } = authActions;
  const observerAuth = async (user) => {
    if (user) {
      (await userExist(user.uid)) ? isLogged(user) : pendingRegister(user);
    } else {
      notLogged();
    }
  };
  useEffect(() => {
    onAuthStateChanged(auth, observerAuth);
  }, []);

  return <div>Loading...</div>;
}
