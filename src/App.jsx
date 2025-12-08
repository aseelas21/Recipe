import { useState } from "react";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import ApiPage from "./pages/ApiPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const [recipes, setRecipes] = useState([
    {
      id: 1,
      name: "Pasta Alfredo",
      description: "Creamy pasta with parmesan and garlic.",
      time: 25,
      difficulty: "Easy",
      category: "Main Dish",
      imageURL: null,
      isVegetarian: false,
    },
    {
      id: 2,
      name: "Chicken Salad",
      description: "Fresh salad with grilled chicken and veggies.",
      time: 15,
      difficulty: "Medium",
      category: "Salad",
      imageURL: null,
      isVegetarian: true,
    },
  ]);

  const addRecipe = (newRecipe) => {
    setRecipes((prev) => [...prev, { id: prev.length + 1, ...newRecipe }]);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <button
          className={
            "nav-button" + (currentPage === "home" ? " active" : "")
          }
          onClick={() => setCurrentPage("home")}
        >
          Home
        </button>
        <button
          className={
            "nav-button" + (currentPage === "form" ? " active" : "")
          }
          onClick={() => setCurrentPage("form")}
        >
          Add Recipe
        </button>
        <button
          className={
            "nav-button" + (currentPage === "api" ? " active" : "")
          }
          onClick={() => setCurrentPage("api")}
        >
          API Recipes
        </button>
      </nav>

      {currentPage === "home" && <HomePage recipes={recipes} />}
      {currentPage === "form" && <FormPage addRecipe={addRecipe} />}
      {currentPage === "api" && <ApiPage />}
    </div>
  );
}

export default App;

