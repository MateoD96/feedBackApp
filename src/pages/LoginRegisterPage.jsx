import { useState } from "react";
import LoginRegisterLayout from "../layout/LoginRegisterLayout";
import { Login, Register } from "../components";
import useAuth from "../hooks/useAuth";

export function LoginRegister() {
  const [action, setAction] = useState("login");
  const { userAuth } = useAuth({
    feedbacks: "/feedback/all",
    register: "/register",
    login: "/",
  });

  if (!userAuth) {
    return (
      <LoginRegisterLayout setAction={setAction}>
        {action === "login" ? <Login /> : <Register />}
      </LoginRegisterLayout>
    );
  }
  return <h3>Cargando...</h3>;
}
