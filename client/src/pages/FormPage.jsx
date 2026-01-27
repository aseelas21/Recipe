import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function FormPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const editId = searchParams.get("edit");

  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Main Dish");
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [preview, setPreview] = useState(null);
  const [image, setImage] = useState(null);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (editId) {
      fetch(`http://localhost:5000/api/recipes/${editId}`)
        .then((res) => res.json())
        .then((data) => {
          setName(data.title);
          setTime(data.time);
          setDifficulty(data.difficulty);
          setDescription(data.description);
          setCategory(data.category);
          setIsVegetarian(data.isVegetarian);
          setPreview(data.image);
        })
        .catch((err) => console.error("Error:", err));
    }
  }, [editId]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Original Validation logic
    if (name.trim().length < 3) return setError("Name must be at least 3 chars");
    if (description.trim().length < 10) return setError("Description too short");

    const recipeData = {
      title: name,
      time,
      difficulty,
      description,
      category,
      isVegetarian,
      image: preview,
    };

    const url = editId ? `http://localhost:5000/api/recipes/${editId}` : "http://localhost:5000/api/recipes";
    const method = editId ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(recipeData),
      });

      if (res.ok) {
        setSuccess(editId ? "Updated!" : "Added!");
        setTimeout(() => navigate("/"), 1500);
      }
    } catch (err) {
      setError("Server error");
    }
  };

  return (
    <div className="page">
      <h1>{editId ? "Edit Recipe" : "Add a New Recipe"}</h1>
      <p className="subtext">Fill the form to manage your collection.</p>

      {preview && (
        <img src={preview} alt="preview" className="recipe-image" style={{ maxWidth: "240px", borderRadius: "8px" }} />
      )}

      {/* Restoring your ORIGINAL form-wrapper structure */}
      <form className="form-wrapper" onSubmit={handleSubmit}>
        <div className="form-group">
          <span className="label">Recipe name</span>
          <input className="input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="form-group">
          <span className="label">Cook time (minutes)</span>
          <input className="input" type="text" value={time} onChange={(e) => setTime(e.target.value)} />
        </div>

        <div className="form-group">
          <span className="label">Description</span>
          <textarea className="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>

        <div className="form-group">
          <span className="label">Image</span>
          <input className="input" type="file" accept="image/*" onChange={handleImageChange} />
        </div>

        <div className="form-group">
          <span className="label">Category</span>
          <select className="select" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option>Main Dish</option>
            <option>Dessert</option>
            <option>Salad</option>
            <option>Soup</option>
          </select>
        </div>

        <div className="form-group">
          <span className="label">Difficulty</span>
          <select className="select" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>

        <div className="checkbox-row">
          <input type="checkbox" checked={isVegetarian} onChange={(e) => setIsVegetarian(e.target.checked)} />
          <span>Vegetarian</span>
        </div>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <button type="submit" className="button-primary">
          {editId ? "Update Recipe" : "Submit"}
        </button>
      </form>
    </div>
  );
}