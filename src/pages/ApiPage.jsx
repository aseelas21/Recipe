import RecipeCard from "../components/RecipeCard";
import useFetch from "../hooks/useFetch";

export default function ApiPage() {
  const { data, loading, error, refetch } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );

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
        <button className="button-primary" onClick={refetch} type="button">
          Try Again
        </button>
      </div>
    );
  }

  const meals = data?.meals || [];
  const items = meals.slice(0, 20).map((m) => ({
    id: "api-" + m.idMeal,
    title: m.strMeal,
    image: m.strMealThumb,
    description: "",
    meta: `${m.strArea} • ${m.strCategory}`,
    source: "api",
  }));

  return (
    <div className="page">
      <h1>API Recipes</h1>

      <button className="button-primary" onClick={refetch} type="button">
        Refetch
      </button>

      <div className="cards-grid">
        {items.map((r) => (
          <RecipeCard key={r.id} recipe={r} />
        ))}
      </div>
    </div>
  );
}


