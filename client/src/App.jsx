import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import ApiPage from "./pages/ApiPage";
import FavoritesPage from "./pages/FavoritesPage"; // 1. Added import for Favorites
import NotFound from "./pages/NotFound";
import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {
  // Requirement: "Remembering UI preferences" handled by your custom hook
  const [theme, setTheme] = useLocalStorage("theme", "light");

  return (
    // Dynamic class application for Dark Mode support
    <div className={"app " + (theme === "dark" ? "theme-dark" : "theme-light")}>
      <Navbar theme={theme} setTheme={setTheme} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/api" element={<ApiPage />} />
        
        {/* 2. Added the Favorites route to fix "Page Not Found" */}
        <Route path="/favorites" element={<FavoritesPage />} />
        
        {/* Requirement: Great UX states (Handling 404) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}