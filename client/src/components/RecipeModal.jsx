import React from 'react';

export default function RecipeModal({ recipe, onClose }) {
  if (!recipe) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        
        <img src={recipe.image || recipe.strMealThumb} alt={recipe.title} className="modal-image" />
        
        <div className="modal-body">
          <h2>{recipe.title || recipe.strMeal}</h2>
          <span className="badge">{recipe.meta || recipe.strCategory}</span>
          
          <h3>Instructions</h3>
          <p className="full-description">
            {recipe.description || recipe.strInstructions}
          </p>
        </div>
      </div>
    </div>
  );
}