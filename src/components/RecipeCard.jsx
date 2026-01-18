import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/favoritesSlice";

export default function RecipeCard({ recipe }) {
  const dispatch = useDispatch();
  const isFav = useSelector((state) =>
    state.favorites.items.some((x) => x.id === recipe.id)
  );

  const toggleFav = () => {
    if (isFav) dispatch(removeFavorite(recipe.id));
    else dispatch(addFavorite(recipe));
  };

  return (
    <div className="recipe-card" style={{ width: "100%", maxWidth: 420 }}>
      {recipe.image && (
        <img className="recipe-image" src={recipe.image} alt={recipe.title} />
      )}

      <h3 className="recipe-title">{recipe.title}</h3>
      {recipe.description && <p className="recipe-meta">{recipe.description}</p>}
      {recipe.meta && <p className="recipe-meta">{recipe.meta}</p>}

      <button className="button-primary" type="button" onClick={toggleFav}>
        {isFav ? "★ Remove Favorite" : "☆ Add Favorite"}
      </button>
    </div>
  );
}


