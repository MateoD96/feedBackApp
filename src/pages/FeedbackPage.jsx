import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Board } from "../components";
import { SuggestionsProvider } from "../context/SuggestionsContext";

export function FeedbackPage() {
  const { userAuth, stateAuth } = useAuth();

  if (stateAuth === 3) {
    return <Navigate to={"/"} />;
  }

  if (stateAuth === 4) {
    return <Navigate to={"/register"} />;
  }

  if (stateAuth === 2) {
    return (
      <SuggestionsProvider>
        <Board userAuth={userAuth} />;
      </SuggestionsProvider>
    );
  }

  return <div>Cargando...</div>;
}
