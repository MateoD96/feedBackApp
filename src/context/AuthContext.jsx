import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const ContextAuth = createContext();

const AuthProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState(null);

  const observerAuth = async (user) => {
    if (user) {
      (await userExist(user.uid))
        ? setUserAuth(user)
        : setUserAuth("pendingRegister");
    } else {
      setUserAuth(null);
    }
    console.log("ejecutando...");
  };

  const data = {
    userAuth,
  };

  return <ContextAuth.Provider value={data}>{children}</ContextAuth.Provider>;
};

export default AuthProvider;
export { ContextAuth };
