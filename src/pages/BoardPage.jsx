import Board from "../components/Board";
import { SuggestionsProvider } from "../context/SuggestionsContext";
import AuthProvider from "../components/AuthProvider";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function BoardPage() {
  const [stateAuth, setStateAuth] = useState(null);
  const [userAuth, setUserAuth] = useState(null);

  if (stateAuth === "login") {
    return (
      <SuggestionsProvider>
        <Board userAuth={userAuth} />;
      </SuggestionsProvider>
    );
  }

  if (stateAuth === "logout") {
    return <Navigate to={"/"} />;
  }

  if (stateAuth === "pendingRegister") {
    return <Navigate to={"/register"} />;
  }

  return (
    <AuthProvider
      authActions={{
        isLogged: (user) => {
          setUserAuth(user);
          setStateAuth("login");
        },
        notLogged: () => {
          setStateAuth("logout");
        },
        pendingRegister: (user) => {
          setUserAuth(user);
          setStateAuth("pendingRegister");
        },
      }}
    />
  );
}

export default BoardPage;
