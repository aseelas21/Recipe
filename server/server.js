const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({
  origin: 'https://recipe-web-hs3b.onrender.com' 
}));
app.use(express.json());

// 1. Database Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/recipe_db';

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// 2. Recipe Schema
const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  time: String,
  difficulty: String,
  description: String,
  category: String,
  isVegetarian: Boolean,
  image: String,
  source: { type: String, default: 'user-created' }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

// 3. API Routes

// READ: Get all recipes
app.get('/api/recipes', async (req, res) => {
  const recipes = await Recipe.find();
  res.json(recipes);
});

// CREATE: Add a new recipe
app.post('/api/recipes', async (req, res) => {
  try {
    const newRecipe = new Recipe(req.body);
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(400).json({ error: "Could not save recipe" });
  }
});

// DELETE: Remove a recipe
app.delete('/api/recipes/:id', async (req, res) => {
  await Recipe.findByIdAndDelete(req.params.id);
  res.json({ message: "Recipe deleted successfully" });
});

// READ ONE: Get a single recipe by ID
app.get('/api/recipes/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ message: "Invalid ID format or Server Error" });
  }
});

// UPDATE: Edit a recipe
app.put('/api/recipes/:id', async (req, res) => {
  const updated = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on PORT:${PORT}`));