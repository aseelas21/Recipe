import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar({ theme, setTheme }) {
  const favoritesCount = useSelector((state) => state.favorites.items.length);

  const linkClass = ({ isActive }) =>
    "nav-button" + (isActive ? " active" : "");

  // Function to handle theme change and persistence
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("app-theme", newTheme); // Requirement: Remembering UI preferences
  };

  return (
    <nav className="navbar">
      <div className="brand">RecipeVault</div>

      <NavLink to="/" className={linkClass}>Home</NavLink>
      <NavLink to="/form" className={linkClass}>Add Recipe</NavLink>
      <NavLink to="/api" className={linkClass}>API Recipes</NavLink>

      <button
        className="nav-button"
        type="button"
        onClick={toggleTheme}
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>

      {/* Make the favorites clickable to improve UX */}
      <NavLink to="/favorites" className="fav-pill" style={{ textDecoration: 'none' }}>
        ⭐ {favoritesCount}
      </NavLink>
    </nav>
  );
}