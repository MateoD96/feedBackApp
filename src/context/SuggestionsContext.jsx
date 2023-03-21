import { createContext } from "react";

const ContextSuggestions = createContext();

const SuggestionsProvider = ({ children }) => {
  const data = {};

  return (
    <ContextSuggestions.Provider value={data}>
      {children}
    </ContextSuggestions.Provider>
  );
};

export default ContextSuggestions;
export { SuggestionsProvider };
