import { createContext, useState } from "react";
import { getSuggestions } from "../firebase";

const ContextSuggestions = createContext();

const SuggestionsProvider = ({ children }) => {
  const [suggestions, setSuggestions] = useState([]);
  const { getAllSuggestions, getFilterSuggestions, getNext } = getSuggestions();

  const getSuggestionsFilter = async (paramsFilter) => {
    console.log(paramsFilter);
  };

  const getSuggestionsAll = async () => {
    const data = await getAllSuggestions();
    if (data) {
      setSuggestions(data);
    }
  };

  const data = {
    getSuggestionsFilter,
    getSuggestionsAll,
    suggestions,
  };

  return (
    <ContextSuggestions.Provider value={data}>
      {children}
    </ContextSuggestions.Provider>
  );
};

export default ContextSuggestions;
export { SuggestionsProvider };
