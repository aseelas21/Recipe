 import { NavLink } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

export default function Navbar() {
  const { favorites } = useFavorites();

  const linkClass = ({ isActive }) =>
    "nav-button" + (isActive ? " active" : "");

  return (
    <nav className="navbar">
      <div className="brand">RecipeVault</div>

      <NavLink to="/" className={linkClass}>
        Home
      </NavLink>

      <NavLink to="/form" className={linkClass}>
        Add Recipe
      </NavLink>

      <NavLink to="/api" className={linkClass}>
        API Recipes
      </NavLink>

      <div className="fav-pill">⭐ {favorites.length}</div>
    </nav>
  );
}
