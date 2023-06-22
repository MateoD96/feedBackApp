import useAuth from "../hooks/useAuth";
import { Board } from "../components";
import { SuggestionsProvider } from "../context/SuggestionsContext";
import { useParams } from "react-router-dom";

export function BoardPage() {
  const { board } = useParams();
  const { userAuth } = useAuth({
    feedbacks: `/feedback/${board}`,
    register: "/register",
    login: "/",
  });

  if (board) {
    return (
      <SuggestionsProvider>
        <Board userAuth={userAuth} board={board} />;
      </SuggestionsProvider>
    );
  }

  return <h3>Cargando...</h3>;
}
