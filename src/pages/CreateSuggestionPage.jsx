import useAuth from "../hooks/useAuth";
import { SuggestionsProvider } from "../context/SuggestionsContext";
import { CreateSuggestion } from "../components";

export function CreateSuggestionPage() {
  const { userAuth } = useAuth({
    other: "/feedback/create",
    register: "/register",
    login: "/",
  });

  if (userAuth) {
    return (
      <SuggestionsProvider>
        <CreateSuggestion userAuth={userAuth} />
      </SuggestionsProvider>
    );
  }
  return <h3>Cargando...</h3>;
}
