import { useFavorites } from "../context/FavoritesContext";

export default function RecipeCard({ recipe }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const fav = isFavorite(recipe.id);

  const handleFav = () => {
    if (fav) removeFavorite(recipe.id);
    else addFavorite(recipe);
  };

  return (
    <div className="recipe-card" style={{ width: "100%", maxWidth: 420 }}>
      {recipe.image && (
        <img className="recipe-image" src={recipe.image} alt={recipe.title} />
      )}

      <h3 className="recipe-title">{recipe.title}</h3>

      {recipe.description && <p className="recipe-meta">{recipe.description}</p>}
      {recipe.meta && <p className="recipe-meta">{recipe.meta}</p>}

      <button className="button-primary" type="button" onClick={handleFav}>
        {fav ? "★ Remove from Favorites" : "☆ Add to Favorites"}
      </button>
    </div>
  );
}


