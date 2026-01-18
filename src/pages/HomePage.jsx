import RecipeCard from "../components/RecipeCard";
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";

export default function HomePage() {
  const favorites = useSelector((state) => state.favorites.items);


  const { data, loading, error } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
  );

  const previewMeals = (data?.meals || []).slice(0, 3).map((m) => ({
    id: "preview-" + m.idMeal,
    title: m.strMeal,
    image: m.strMealThumb,
    description: "",
    meta: `${m.strArea} • ${m.strCategory}`,
    source: "api-preview",
  }));

  const homeRecipes = [
    {
      id: "home-1",
      title: "Pasta Alfredo",
      image: null,
      description: "Creamy pasta with parmesan and garlic.",
      meta: "Time: 25 • Easy • Main Dish",
      source: "home",
    },
    {
      id: "home-2",
      title: "Chicken Salad",
      image: null,
      description: "Fresh salad with grilled chicken and veggies.",
      meta: "Time: 15 • Medium • Salad",
      source: "home",
    },
  ];

  return (
    <div className="page">
      <h1>RecipeVault</h1>

      <h2 style={{ marginTop: 20 }}>Home Recipes</h2>
      <div className="cards-grid">
        {homeRecipes.map((r) => (
          <RecipeCard key={r.id} recipe={r} />
        ))}
      </div>

      <h2 style={{ marginTop: 40 }}>⭐ My Favorites</h2>
      {favorites.length === 0 ? (
        <p className="subtext">No favorites yet. Add from Home or API.</p>
      ) : (
        <div className="cards-grid">
          {favorites.map((f) => (
            <RecipeCard key={f.id} recipe={f} />
          ))}
        </div>
      )}

      <h2 style={{ marginTop: 40 }}>API Preview</h2>
      {loading && <p className="subtext">Loading preview...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && (
        <div className="cards-grid">
          {previewMeals.map((r) => (
            <RecipeCard key={r.id} recipe={r} />
          ))}
        </div>
      )}
    </div>
  );
}

