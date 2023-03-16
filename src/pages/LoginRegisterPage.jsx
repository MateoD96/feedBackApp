import { useState } from "react";
import LoginRegisterLayout from "../layout/LoginRegisterLayout";
import { Login, Register } from "../components";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

function LoginRegister() {
  const [action, setAction] = useState("login");
  const { userAuth, stateAuth } = useAuth();

  if (stateAuth === 2) {
    return <Navigate to={"/feedback"} />;
  }

  if (stateAuth === 4) {
    return <Navigate to={"/register"} />;
  }

  if (stateAuth === 3) {
    return (
      <LoginRegisterLayout setAction={setAction}>
        {action === "login" ? <Login /> : <Register />}
      </LoginRegisterLayout>
    );
  }

  return <h3>Cargando...</h3>;
}

export default LoginRegister;
