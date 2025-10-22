import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CreateStoryPage from "./pages/CreateStoryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create" element={<CreateStoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
