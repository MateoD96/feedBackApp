import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useContext, useEffect } from "react";
import { Feedback } from "../components/index";
import FeedbackProvider, { ContextFeedback } from "../context/FeedbackContext";

export function FeedbackPage() {
  const { suggestion } = useParams();
  const { getFeedback, feedback } = useContext(ContextFeedback);
  const { userAuth } = useAuth({
    feedbacks: `/feedback/suggestion/${suggestion}`,
    register: "/register",
    login: "/",
  });

  useEffect(() => {
    getFeedback(suggestion);
  }, [suggestion]);

  if (feedback) {
    return (
      <FeedbackProvider>
        <Feedback userAuth={userAuth} feedback={feedback} />;
      </FeedbackProvider>
    );
  }
  return <h3>Cargando...</h3>;
}
