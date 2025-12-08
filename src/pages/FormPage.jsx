import { useState } from "react";

export default function FormPage({ addRecipe }) {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [category, setCategory] = useState("Main Dish");
  const [isVegetarian, setIsVegetarian] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim().length < 3) {
      setError("Name must be at least 3 characters");
      setSuccess("");
      return;
    }

    if (time === "" || isNaN(time)) {
      setError("Time must be a number");
      setSuccess("");
      return;
    }

    if (description.trim().length < 10) {
      setError("Description must be at least 10 characters");
      setSuccess("");
      return;
    }

    if (!image) {
      setError("Please upload an image");
      setSuccess("");
      return;
    }

    setError("");

    const recipeData = {
      name,
      time,
      difficulty,
      description,
      category,
      isVegetarian,
      imageURL: preview,
    };

    addRecipe(recipeData);
    setSuccess("Recipe added successfully!");

    setName("");
    setTime("");
    setDifficulty("Easy");
    setDescription("");
    setImage(null);
    setPreview(null);
    setCategory("Main Dish");
    setIsVegetarian(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    }
  };

  return (
    <div className="page">
      <h1>Add a New Recipe</h1>
      <p className="subtext">Fill the form to add a recipe to your collection.</p>

      {preview && (
        <img
          src={preview}
          alt="preview"
          className="recipe-image"
          style={{ maxWidth: "240px" }}
        />
      )}

      <form className="form-wrapper" onSubmit={handleSubmit}>
        <div className="form-group">
          <span className="label">Recipe name</span>
          <input
            className="input"
            type="text"
            placeholder="Recipe name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <span className="label">Cook time (minutes)</span>
          <input
            className="input"
            type="text"
            placeholder="e.g. 30"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        <div className="form-group">
          <span className="label">Description</span>
          <textarea
            className="textarea"
            placeholder="Short description of the recipe..."
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-group">
          <span className="label">Image</span>
          <input
            className="input"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        <div className="form-group">
          <span className="label">Category</span>
          <select
            className="select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Main Dish</option>
            <option>Dessert</option>
            <option>Salad</option>
            <option>Soup</option>
          </select>
        </div>

        <div className="form-group">
          <span className="label">Difficulty</span>
          <select
            className="select"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>

        <div className="checkbox-row">
          <input
            type="checkbox"
            checked={isVegetarian}
            onChange={(e) => setIsVegetarian(e.target.checked)}
          />
          <span>Vegetarian</span>
        </div>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <button type="submit" className="button-primary">
          Submit
        </button>
      </form>
    </div>
  );
}




