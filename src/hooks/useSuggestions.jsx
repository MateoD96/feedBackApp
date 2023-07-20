import { useContext, useEffect } from "react";
import ContextSuggestions from "../context/SuggestionsContext";

function useSuggestions(board) {
  const {
    fnGetSuggestions,
    getNextSuggestions,
    suggestions,
    setSuggestions,
    loading,
    loadingSeeMore,
  } = useContext(ContextSuggestions);

  const seeMore = () => {
    getNextSuggestions(board);
  };

  useEffect(() => {
    fnGetSuggestions(board);
  }, [board]);

  return {
    seeMore,
    suggestions,
    loading,
    loadingSeeMore,
  };
}

export default useSuggestions;
