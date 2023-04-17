import styles from "../styles/Suggestion.module.css";
import LayoutBoards from "../layout/LayoutBoards";
import useSuggestions from "../hooks/useSuggestions";
import { useParams } from "react-router-dom";
import { Suggestion } from "./index";

export function Board({ userAuth }) {
  const { board } = useParams();
  const { suggestions, loading } = useSuggestions(board);

  return (
    <LayoutBoards>
      {loading && <h3 className={styles.loader}>Cargando...</h3>}
      <div className={styles.layout}>
        {suggestions &&
          suggestions.map((s) => (
            <Suggestion key={s.id} suggestion={s} userAuth={userAuth} />
          ))}
      </div>
    </LayoutBoards>
  );
}
