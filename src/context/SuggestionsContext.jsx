import { createContext, useState } from "react";
import { getSuggestions } from "../firebase";

const ContextSuggestions = createContext();

const SuggestionsProvider = ({ children }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingSeeMore, setLoadingSeeMore] = useState(false);
  const [count, setCount] = useState(null);
  const {
    getAllSuggestions,
    getFilterSuggestions,
    getNext,
    getCountAll,
    getCountFilter,
  } = getSuggestions();

  const printData = (data) => {
    if (data) {
      setSuggestions(data);
    }
  };

  const fnGetSuggestions = async (paramsFilter) => {
    setLoading(true);
    setSuggestions([]);
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
    setLoadingSeeMore(true);
    const res = await getNext(filter);
    if (res) {
      setSuggestions([...suggestions, ...res]);
    }
    setLoadingSeeMore(false);
  };

  const getCount = async (filter) => {
    if (filter !== "all") {
      const countSugg = await getCountFilter(filter);
      if (countSugg) setCount(countSugg);
      return;
    }
    const countAll = await getCountAll();
    if (countAll) setCount(countAll);
  };

  const orderSuggestions = (orderBy) => {
    const order = () => {
      const res = [...suggestions].sort((a, b) => {
        if (a.countComms < b.countComms) return -1;
        if (a.countComms > b.countComms) return 1;
        return 0;
      });
      return res;
    };

    orderBy === "Less Comments"
      ? setSuggestions(order())
      : setSuggestions(order().reverse());
  };

  const data = {
    fnGetSuggestions,
    setSuggestions,
    getNextSuggestions,
    getCount,
    orderSuggestions,
    count,
    suggestions,
    loading,
    loadingSeeMore,
  };

  return (
    <ContextSuggestions.Provider value={data}>
      {children}
    </ContextSuggestions.Provider>
  );
};

export default ContextSuggestions;
export { SuggestionsProvider };
