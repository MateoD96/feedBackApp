import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { userExist } from "../firebase";

/* statesAuth:
  2: loged,
  3: notLoged,
  4: complete register
*/

function useAuth() {
  const [userAuth, setUserAuth] = useState(null);
  const [stateAuth, setStateAuth] = useState(0);

  const observerAuth = async (user) => {
    if (user) {
      setUserAuth(user);
      (await userExist(user.uid)) ? setStateAuth(2) : setStateAuth(4);
    } else {
      setStateAuth(3);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, observerAuth);
  }, []);

  return {
    userAuth,
    stateAuth,
  };
}

export default useAuth;
