import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar({ theme, setTheme }) {
  const favoritesCount = useSelector((state) => state.favorites.items.length);

  const linkClass = ({ isActive }) =>
    "nav-button" + (isActive ? " active" : "");

  return (
    <nav className="navbar">
      <div className="brand">RecipeVault</div>

      <NavLink to="/" className={linkClass}>Home</NavLink>
      <NavLink to="/form" className={linkClass}>Add Recipe</NavLink>
      <NavLink to="/api" className={linkClass}>API Recipes</NavLink>

      <button
        className="nav-button"
        type="button"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>

      <div className="fav-pill">⭐ {favoritesCount}</div>
    </nav>
  );
}

