import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { getSuggestion } from "../firebase";
import { Feedback } from "../components/index";

export function SuggestionPage() {
  const { suggestion } = useParams();
  const { userAuth, stateAuth } = useAuth();
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const dat = await getSuggestion(suggestion);
      if (dat) setFeedback(dat);
    };
    getData();
  }, [suggestion]);

  if (feedback) {
    return <Feedback feedback={feedback} userAuth={userAuth} />;
  }

  return <div>Cargando...</div>;
}
