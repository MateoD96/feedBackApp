import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  LoginRegister,
  RegisterPage,
  FeedbackPage,
  BoardPage,
  CreateSuggestionPage,
} from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<LoginRegister />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/feedback/all" element={<FeedbackPage />} />
        <Route path="/feedback/:title" element={<BoardPage />} />
        <Route path="/feedback/create" element={<CreateSuggestionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
