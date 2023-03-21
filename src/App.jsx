import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginRegister, RegisterPage, FeedbackPage, BoardPage } from "./pages";
import { SuggestionsProvider } from "./context/SuggestionsContext";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<LoginRegister />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/feedback/all"
          element={
            <SuggestionsProvider>
              <FeedbackPage />
            </SuggestionsProvider>
          }
        />
        <Route
          path="/feedback/:title"
          element={
            <SuggestionsProvider>
              <BoardPage />
            </SuggestionsProvider>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
