import RecipeCard from "../components/RecipeCard";
import useFetch from "../hooks/useFetch";

export default function ApiPage() {
  const { data, loading, error, refetch } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s="
  );

  // 1. LOADING STATE
  if (loading) {
    return (
      <div className="page center-content">
        <h1>API Recipes</h1>
        <div className="spinner"></div>
        <p className="subtext">Gathering global flavors...</p>
      </div>
    );
  }

  // 2. ERROR STATE: Provides a clear path for the user to try again
  if (error) {
    return (
      <div className="page center-content">
        <h1>API Recipes</h1>
        <p className="error">❌ {error}</p>
        <button className="button-primary" onClick={refetch} type="button">
          Try Again
        </button>
      </div>
    );
  }

  const meals = data?.meals || [];
  
  // Mapping the API data to match your local recipe object structure
  const items = meals.slice(0, 20).map((m) => ({
    idMeal: m.idMeal, // Unique ID from TheMealDB
    title: m.strMeal,
    image: m.strMealThumb,
    description: m.strInstructions, // Mapped for full modal viewing
    meta: `${m.strArea} • ${m.strCategory}`,
    source: "api",
  }));

  return (
    <div className="page">
      {/* Header section with Refetch button for Great UX */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '20px' 
      }}>
        <h1>API Recipes</h1>
        <button className="button-primary" onClick={refetch} type="button">
          🔄 Refetch Recipes
        </button>
      </div>

      {/* 3. EMPTY STATE: Handles cases where no data is returned */}
      {items.length === 0 ? (
        <div className="center-content">
          <p>No recipes found. Try refetching!</p>
        </div>
      ) : (
        <div className="cards-grid">
          {items.map((r) => (
            <RecipeCard 
              key={r.idMeal} 
              recipe={r} 
              hideControls={true} // Hides Edit/Delete for API data
            />
          ))}
        </div>
      )}
    </div>
  );
}