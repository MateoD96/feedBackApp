import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { ContextAuth } from "../context/AuthContext";

function ProtectedRoutes({ children, toRedirect = "/" }) {
  const { userAuth } = useContext(ContextAuth);

  if (!userAuth) {
    return <Navigate to={toRedirect} />;
  }
  if (userAuth === "pendingRegister") {
    return <Navigate to={"/register"} />;
  }

  return userAuth && userAuth !== "pendingRegister" ? children : <Outlet />;
}

export default ProtectedRoutes;
