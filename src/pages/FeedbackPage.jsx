import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Feedback from "../components/Feedback";
import useGetData from "../hooks/useGetData";
import { getSuggestion } from "../firebase";
import ProviderComments from "../context/CommentsContext";

function FeedbackPage() {
  const { suggestion } = useParams();
  const [feedback, loading] = useGetData(suggestion, getSuggestion);
  const { userAuth } = useAuth({
    feedbacks: `/feedback/suggestion/${suggestion}`,
    register: "/register",
    login: "/",
  });

  if (feedback) {
    return (
      <ProviderComments userAuth={userAuth} feedback={feedback}>
        <Feedback userAuth={userAuth} feedback={feedback} />;
      </ProviderComments>
    );
  }
  return <h3>Cargando...</h3>;
}

export default FeedbackPage;
