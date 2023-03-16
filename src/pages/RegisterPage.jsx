import { Navigate } from "react-router-dom";
import { CompleteRegister } from "../components/CompleteRegister";
import useAuth from "../hooks/useAuth";

function RegisterPage() {
  const { userAuth, stateAuth } = useAuth();

  if (stateAuth === 3) {
    return <Navigate to={"/"} />;
  }

  if (stateAuth === 2) {
    return <Navigate to={"/feedback"} />;
  }

  if (stateAuth === 4) {
    return <CompleteRegister userAuth={userAuth} />;
  }

  return <h3>Cargando...</h3>;
}

export default RegisterPage;
