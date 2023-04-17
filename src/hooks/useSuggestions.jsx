import { useContext, useEffect } from "react";
import ContextSuggestions from "../context/SuggestionsContext";

function useSuggestions(board) {
  const { fnGetSuggestions, suggestions, loading } =
    useContext(ContextSuggestions);

  useEffect(() => {
    fnGetSuggestions(board);
  }, [board]);

  return {
    suggestions,
    loading,
  };
}

export default useSuggestions;
