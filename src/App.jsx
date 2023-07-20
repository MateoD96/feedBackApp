import { lazy, Suspense } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const LoginRegister = lazy(() => import("./pages/LoginRegisterPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const BoardPage = lazy(() => import("./pages/BoardPage"));
const CreateSuggestionPage = lazy(() => import("./pages/CreateSuggestionPage"));
const FeedbackPage = lazy(() => import("./pages/FeedbackPage"));

function App() {
  return (
    <Suspense fallback={<h3>FeedBack App..</h3>}>
      <Router>
        <Routes>
          <Route index element={<LoginRegister />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/feedback/:board" element={<BoardPage />} />
          <Route path="/feedback/create" element={<CreateSuggestionPage />} />
          <Route
            path="/feedback/suggestion/:suggestion"
            element={<FeedbackPage />}
          />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
