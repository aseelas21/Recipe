import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import ApiPage from "./pages/ApiPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/api" element={<ApiPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}


