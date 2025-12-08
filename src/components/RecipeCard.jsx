export default function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      {recipe.imageURL && (
        <img
          src={recipe.imageURL}
          alt={recipe.name}
          className="recipe-image"
        />
      )}

      <h3 className="recipe-title">{recipe.name}</h3>

      <p className="recipe-meta">{recipe.description}</p>

      <div className="recipe-meta">
        Time: {recipe.time} minutes
      </div>

      <div className="badge-row">
        <span className="badge">Difficulty: {recipe.difficulty}</span>
        <span className="badge secondary">Category: {recipe.category}</span>
        <span className="badge chip">
          {recipe.isVegetarian ? "Vegetarian" : "Non-vegetarian"}
        </span>
      </div>
    </div>
  );
}

