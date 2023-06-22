import styles from "../styles/Suggestion.module.css";
import LayoutBoards from "../layout/LayoutBoards";
import useSuggestions from "../hooks/useSuggestions";
import { Suggestion } from "./index";

export function Board({ userAuth, board }) {
  const { suggestions, loading } = useSuggestions(board);

  return (
    <LayoutBoards>
      {loading ? (
        <h3 className={styles.loader}>Cargando...</h3>
      ) : (
        <div className={styles.layout}>
          {suggestions && suggestions.length > 0 ? (
            suggestions.map((s) => (
              <Suggestion key={s.id} suggestion={s} userAuth={userAuth} />
            ))
          ) : (
            <h3>No hay Sugerencias por mostrar</h3>
          )}
        </div>
      )}
    </LayoutBoards>
  );
}
