import { createContext, useState } from "react";
import { getSuggestions } from "../firebase";

const ContextSuggestions = createContext();

const SuggestionsProvider = ({ children }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const { getAllSuggestions, getFilterSuggestions, getNext } = getSuggestions();

  const printData = (data) => {
    if (data) {
      setSuggestions(data);
    }
  };

  const fnGetSuggestions = async (paramsFilter) => {
    setLoading(true);
    if (paramsFilter !== "all") {
      const dataFilter = await getFilterSuggestions(paramsFilter);
      printData(dataFilter);
      setLoading(false);
      return;
    }
    const data = await getAllSuggestions();
    printData(data);
    setLoading(false);
  };

  const getNextSuggestions = async (filter) => {
    const res = await getNext(filter);
    if (res) {
      setSuggestions([...suggestions, ...res]);
    }
  };

  const data = {
    fnGetSuggestions,
    setSuggestions,
    getNextSuggestions,
    suggestions,
    loading,
  };

  return (
    <ContextSuggestions.Provider value={data}>
      {children}
    </ContextSuggestions.Provider>
  );
};

export default ContextSuggestions;
export { SuggestionsProvider };
