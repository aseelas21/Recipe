import { useSelector } from "react-redux";
import RecipeCard from "../components/RecipeCard";

export default function FavoritesPage() {
  const favorites = useSelector((state) => state.favorites.items);

  return (
    <div className="page">
      <h1>My Favorites</h1>
      <p className="subtext">Your saved collection of recipes.</p>

      {favorites.length === 0 ? (
        <div className="center-content">
          <p>You haven't saved any favorites yet.</p>
          <p style={{ fontSize: "0.9rem", color: "#666" }}>
            Browse the Home or API pages to add some!
          </p>
        </div>
      ) : (
        <div className="cards-grid">
          {favorites.map((recipe) => (
            <RecipeCard 
              key={recipe._id || recipe.idMeal || recipe.id} 
              recipe={recipe} 
              onDelete={() => {}} 
              hideControls={true} // Hides the Edit and Delete buttons on this page
            />
          ))}
        </div>
      )}
    </div>
  );
}