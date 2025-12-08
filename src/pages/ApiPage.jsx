import { useEffect, useState } from "react";

export default function ApiPage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_KEY = "1d1f2e8661cf4723bcf702db9d63c910";

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const res = await fetch(
          `https://api.spoonacular.com/recipes/random?number=15&apiKey=${API_KEY}`
        );

        if (!res.ok) throw new Error("Failed to load recipes");

        const data = await res.json();
        setRecipes(data.recipes);
      } catch (err) {
        setError("Error loading recipes.");
      } finally {
        setLoading(false);
      }
    }

    fetchRecipes();
  }, []);

  if (loading) return <p>Loading recipes...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="page">
      <h1>API Recipes</h1>
      <p className="subtext">Fetched from a real online API.</p>

      <div className="cards-grid">
        {recipes.map((recipe) => (
          <div className="api-card" key={recipe.id}>
            <img src={recipe.image} alt={recipe.title} />
            <h3 className="api-title">{recipe.title}</h3>
            <p style={{ fontSize: "12px" }}>
              Ready in: {recipe.readyInMinutes} mins
            </p>
            <p style={{ fontSize: "12px" }}>
              Servings: {recipe.servings}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

