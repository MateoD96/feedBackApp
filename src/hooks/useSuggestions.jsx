import { useContext, useEffect } from "react";
import ContextSuggestions from "../context/SuggestionsContext";

function useSuggestions(board) {
  const { getSuggestionsFilter, getSuggestionsAll, suggestions } =
    useContext(ContextSuggestions);

  useEffect(() => {
    board ? getSuggestionsFilter(board) : getSuggestionsAll();
  }, [board]);

  return {
    suggestions,
  };
}

export default useSuggestions;
