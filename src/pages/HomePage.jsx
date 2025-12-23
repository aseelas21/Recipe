import RecipeCard from "../components/RecipeCard";
import { useFavorites } from "../context/FavoritesContext";

export default function HomePage() {
  const { favorites } = useFavorites();

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
      <p className="subtext">Home recipes + your favorites.</p>

      <h2 style={{ marginTop: 20 }}>Home Recipes</h2>
      <div className="cards-grid">
        {homeRecipes.map((r) => (
          <RecipeCard key={r.id} recipe={r} />
        ))}
      </div>

      <h2 style={{ marginTop: 40 }}>⭐ My Favorites</h2>
      {favorites.length === 0 ? (
        <p className="subtext">No favorites yet. Add some from Home or API.</p>
      ) : (
        <div className="cards-grid">
          {favorites.map((f) => (
            <RecipeCard key={f.id} recipe={f} />
          ))}
        </div>
      )}
    </div>
  );
}
