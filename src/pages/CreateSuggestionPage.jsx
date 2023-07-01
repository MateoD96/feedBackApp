import { useState } from "react";
import { SuggestionsProvider } from "../context/SuggestionsContext";
import CreateSuggestion from "../components/CreateSuggestion";
import AuthProvider from "../components/AuthProvider";

function CreateSuggestionPage() {
  const [stateAuth, setStateAuth] = useState(null);
  const [userAuth, setUserAuth] = useState(null);

  if (stateAuth === "login") {
    return (
      <SuggestionsProvider>
        <CreateSuggestion userAuth={userAuth} />
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

export default CreateSuggestionPage;
