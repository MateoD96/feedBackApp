import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { userExist } from "../firebase";
import { useNavigate } from "react-router-dom";

/* statesAuth:
  2: loged,
  3: notLoged,
  4: complete register
*/

function useAuth(paths) {
  const [userAuth, setUserAuth] = useState(null);
  const navigate = useNavigate();
  const { feedbacks, register, login, other } = paths;

  const observerAuth = async (user) => {
    if (user) {
      setUserAuth(user);
      (await userExist(user.uid))
        ? navigate(feedbacks || other)
        : navigate(register);
    } else {
      navigate(login);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, observerAuth);
  }, []);

  return {
    userAuth,
  };
}

export default useAuth;
