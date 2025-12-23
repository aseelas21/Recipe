import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

export default function ApiPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchRecipes() {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );

        if (!res.ok) throw new Error("Failed to fetch recipes");

        const data = await res.json();
        const meals = data.meals || [];

        const mapped = meals.slice(0, 20).map((m) => ({
          id: "api-" + m.idMeal,
          title: m.strMeal,
          image: m.strMealThumb,
          description: "",
          meta: `${m.strArea} • ${m.strCategory}`,
          source: "api",
        }));

        setItems(mapped);
      } catch (e) {
        setError(e.message || "Error");
      } finally {
        setLoading(false);
      }
    }

    fetchRecipes();
  }, []);

  if (loading) {
    return (
      <div className="page">
        <h1>API Recipes</h1>
        <p className="subtext">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page">
        <h1>API Recipes</h1>
        <p className="error">{error}</p>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>API Recipes</h1>
      <p className="subtext">Add items to favorites using the global Context.</p>

      <div className="cards-grid">
        {items.map((r) => (
          <RecipeCard key={r.id} recipe={r} />
        ))}
      </div>
    </div>
  );
}


