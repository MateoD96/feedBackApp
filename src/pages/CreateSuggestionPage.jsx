import useAuth from "../hooks/useAuth";
import { SuggestionsProvider } from "../context/SuggestionsContext";
import { CreateSuggestion } from "../components";
import { Navigate } from "react-router";

export function CreateSuggestionPage() {
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
        <CreateSuggestion userAuth={userAuth} />
      </SuggestionsProvider>
    );
  }
  return <h3>Cargando...</h3>;
}
