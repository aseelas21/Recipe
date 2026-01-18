import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import ApiPage from "./pages/ApiPage";
import NotFound from "./pages/NotFound";
import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  return (
    <div className={"app " + (theme === "dark" ? "theme-dark" : "theme-light")}>
      <Navbar theme={theme} setTheme={setTheme} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/api" element={<ApiPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}


