import { useState } from "react"; // 1. Import useState
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/favoritesSlice";
import { useNavigate } from "react-router-dom";
import RecipeModal from "./RecipeModal"; // 2. Import the Modal

export default function RecipeCard({ recipe, onDelete, hideControls = false }) {
  const [isModalOpen, setIsModalOpen] = useState(false); // 3. Local modal state
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const recipeId = recipe._id || recipe.idMeal || recipe.id;
  const displayTitle = recipe.title || recipe.strMeal;
  const displayImage = recipe.image || recipe.strMealThumb || "https://via.placeholder.com/300x200?text=No+Image";
  const displayDescription = recipe.description || recipe.strInstructions;
  const displayTime = recipe.time ? `${recipe.time} mins` : "Prep-based";
  const displayDifficulty = recipe.difficulty || "Global Recipe";

  const isUserRecipe = !!recipe._id;

  const isFav = useSelector((state) =>
    state.favorites.items.some((x) => (x._id || x.idMeal || x.id) === recipeId)
  );

  const toggleFav = (e) => {
    e.stopPropagation(); // 4. Prevent opening the modal when clicking favorite
    if (isFav) {
      dispatch(removeFavorite(recipeId));
    } else {
      dispatch(addFavorite({ ...recipe, _id: recipeId, title: displayTitle, image: displayImage }));
    }
  };

  return (
    <>
      {/* 5. Clicking the card (except buttons) opens the modal */}
      <div className="recipe-card" onClick={() => setIsModalOpen(true)} style={{ cursor: 'pointer' }}>
        <img src={displayImage} alt={displayTitle} className="recipe-image" />

        <div style={{ padding: '10px' }}>
          <h3>{displayTitle}</h3>
          <p className="subtext">{displayTime} | {displayDifficulty}</p>
          <p className="description-text" style={{ 
            display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical', overflow: 'hidden' 
          }}>
            {displayDescription || "Delicious recipe."}
          </p>
        </div>

        <div className="card-actions" onClick={(e) => e.stopPropagation()}>
          <button className="button-primary" onClick={toggleFav}>
            {isFav ? "★ Favorite" : "☆ Favorite"}
          </button>

          {isUserRecipe && !hideControls && (
            <>
              <button className="button-secondary" onClick={() => navigate(`/form?edit=${recipeId}`)}>
                Edit
              </button>
              <button 
                className="button-secondary" 
                style={{ backgroundColor: '#ff4d4d', color: 'white' }}
                onClick={() => onDelete(recipeId)}
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>

      {/* 6. Render Modal if open */}
      {isModalOpen && (
        <RecipeModal 
          recipe={{ ...recipe, title: displayTitle, image: displayImage, description: displayDescription }} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </>
  );
}