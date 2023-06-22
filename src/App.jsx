import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  LoginRegister,
  RegisterPage,
  BoardPage,
  CreateSuggestionPage,
  FeedbackPage,
} from "./pages";
import FeedbackProvider from "./context/FeedbackContext";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<LoginRegister />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/feedback/:board" element={<BoardPage />} />
        <Route path="/feedback/create" element={<CreateSuggestionPage />} />
        <Route
          path="/feedback/suggestion/:suggestion"
          element={
            <FeedbackProvider>
              <FeedbackPage />
            </FeedbackProvider>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
