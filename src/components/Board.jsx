import styles from "../styles/Suggestion.module.css";
import LayoutBoards from "../layout/LayoutBoards";
import useSuggestions from "../hooks/useSuggestions";
import Suggestion from "../components/Suggestion";
import BtnSeeMore from "../components/BtnSeeMore";
import { useParams } from "react-router-dom";

export default function Board({ userAuth }) {
  const { board } = useParams();
  const { seeMore, suggestions, loading, loadingSeeMore } =
    useSuggestions(board);

  return (
    <LayoutBoards>
      {loading ? (
        <h3 className={styles.loader}>Cargando...</h3>
      ) : (
        <div className={styles.layout}>
          {suggestions && suggestions.length > 0 ? (
            suggestions.map((s) => (
              <Suggestion key={s.idDoc} suggestion={s} userAuth={userAuth} />
            ))
          ) : (
            <h3>No hay Sugerencias por mostrar</h3>
          )}
        </div>
      )}
      {suggestions && suggestions.length > 4 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BtnSeeMore seeMore={seeMore} />
        </div>
      ) : (
        ""
      )}
      {loadingSeeMore && <h3>Cargando...</h3>}
    </LayoutBoards>
  );
}
