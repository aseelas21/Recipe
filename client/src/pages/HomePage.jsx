import RecipeCard from "../components/RecipeCard";
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";

export default function HomePage() {
  const favorites = useSelector((state) => state.favorites.items);

  const { data: dbRecipes, loading: dbLoading, error: dbError, refetch } = useFetch(
    "https://recipe-xhw5.onrender.com/api/recipes"
  );

  const { data: apiData, loading: apiLoading } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
  );

  const previewMeals = (apiData?.meals || []).slice(0, 3).map((m) => ({
    id: "api-" + m.idMeal,
    title: m.strMeal,
    image: m.strMealThumb,
    description: "External Recipe",
    source: "api-preview",
  }));

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      await fetch(`https://recipe-xhw5.onrender.com/api/recipes/${id}`, { method: 'DELETE' });
      refetch();
    }
  };

  return (
    <div className="page">
      <h1>RecipeVault</h1>

      <h2 style={{ marginTop: 20 }}>My Database Recipes</h2>
      {dbLoading && <p>Loading your recipes...</p>}
      {dbError && <p className="error">Server Error: Make sure your node server is running!</p>}
      
      <div className="cards-grid">
        {dbRecipes && dbRecipes.map((r) => (
          <RecipeCard key={r._id} recipe={{...r, id: r._id}} onDelete={handleDelete} />
        ))}
        {dbRecipes?.length === 0 && <p className="subtext">Your database is empty. Go to the Form to add one!</p>}
      </div>

      {/* Favorites and API Preview stay the same... */}
    </div>
  );
}