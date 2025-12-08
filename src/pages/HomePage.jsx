import RecipeCard from "../components/RecipeCard";

export default function HomePage({ recipes }) {
  return (
    <div className="page">
      <h1>RecipeVault</h1>
      <p className="subtext">Your personal collection of recipes.</p>

      <div className="cards-grid">
        {recipes.map((item) => (
          <RecipeCard key={item.id} recipe={item} />
        ))}
      </div>
    </div>
  );
}
