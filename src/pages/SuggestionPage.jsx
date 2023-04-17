import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { getSuggestion } from "../firebase";

export function SuggestionPage() {
  const { suggestion } = useParams();
  const { userAuth, stateAuth } = useAuth();
  const [sugg, setSuggestion] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const dat = await getSuggestion(suggestion);
      if (dat) setSuggestion(dat);
    };
    getData();
  }, []);

  if (sugg) {
    return <div>{sugg.title}</div>;
  }

  return <div>Cargando...</div>;
}
