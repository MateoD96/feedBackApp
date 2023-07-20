import styles from "../styles/Suggestion.module.css";
import LayoutBoards from "../layout/LayoutBoards";
import useSuggestions from "../hooks/useSuggestions";
import Suggestion from "./Suggestion";
import BtnSeeMore from "./BtnSeeMore";
import LayoutLoading from "../layout/LayoutLoading";
import LoadingSeeMore from "./LoadingSeemore";
import { useParams } from "react-router-dom";

export default function Board({ userAuth }) {
  const { board } = useParams();
  const { seeMore, suggestions, loading, loadingSeeMore } =
    useSuggestions(board);

  return (
    <LayoutBoards board={board}>
      {loading ? (
        <LayoutLoading>
          <LoadingSeeMore />
        </LayoutLoading>
      ) : (
        <div className={styles.layout}>
          {suggestions && suggestions.length > 0 ? (
            suggestions.map((sugg) => (
              <Suggestion
                key={sugg.idDoc}
                suggestion={sugg}
                userAuth={userAuth}
                count={true}
              />
            ))
          ) : (
            <h3>No hay Sugerencias por mostrar</h3>
          )}
        </div>
      )}
      {suggestions && suggestions.length > 4 ? (
        <LayoutLoading>
          {loadingSeeMore ? (
            <LoadingSeeMore />
          ) : (
            <BtnSeeMore seeMore={seeMore} />
          )}
        </LayoutLoading>
      ) : (
        ""
      )}
    </LayoutBoards>
  );
}
