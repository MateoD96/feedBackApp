import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  LoginRegister,
  RegisterPage,
  FeedbackPage,
  BoardPage,
  CreateSuggestionPage,
  SuggestionPage,
} from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<LoginRegister />} />
        <Route path="/register" element={<RegisterPage />} />
        {/*  <Route path="/feedback/all" element={<FeedbackPage />} /> */}
        <Route path="/feedback/:board" element={<BoardPage />} />
        <Route path="/feedback/create" element={<CreateSuggestionPage />} />
        <Route
          path="/feedback/suggestion/:suggestion"
          element={<SuggestionPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
