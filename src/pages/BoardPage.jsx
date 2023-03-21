import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { Board } from "../components";

export function BoardPage() {
  const { userAuth, stateAuth } = useAuth();

  if (stateAuth === 3) {
    return <Navigate to={"/"} />;
  }

  if (stateAuth === 4) {
    return <Navigate to={"/register"} />;
  }

  if (stateAuth === 2) {
    return <Board userAuth={userAuth} />;
  }

  return <h3>Cargando...</h3>;
}
