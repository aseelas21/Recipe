import { createSlice } from "@reduxjs/toolkit";

// 1. SAFE LOADING: Handles "null checks" and "JSON parse errors" as requested
const savedItems = localStorage.getItem("recipe_favs");
let parsedItems = [];

try {
  // If savedItems exists, parse it; otherwise use empty array
  parsedItems = savedItems ? JSON.parse(savedItems) : [];
} catch (error) {
  // Requirement: "JSON parse errors handled"
  console.error("Local storage was corrupted, resetting favorites", error);
  parsedItems = []; 
}

const initialState = {
  items: parsedItems,        
  lastUpdated: localStorage.getItem("favs_last_updated") || null 
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const item = action.payload;
      
      // We check for all possible ID types to prevent duplicates
      const exists = state.items.some(
        (x) => (x._id || x.idMeal || x.id) === (item._id || item.idMeal || item.id)
      );
      
      if (!exists) {
        state.items.push(item);
        state.lastUpdated = new Date().toISOString();

        // 2. MEANINGFUL PERSISTENCE: Save to localStorage
        localStorage.setItem("recipe_favs", JSON.stringify(state.items));
        localStorage.setItem("favs_last_updated", state.lastUpdated);
      }
    },
    removeFavorite: (state, action) => {
      const id = action.payload;
      // Filter out by any valid ID type
      state.items = state.items.filter(
        (x) => (x._id || x.idMeal || x.id) !== id
      );
      state.lastUpdated = new Date().toISOString();

      // Update Local Storage after removal
      localStorage.setItem("recipe_favs", JSON.stringify(state.items));
      localStorage.setItem("favs_last_updated", state.lastUpdated);
    },
    clearFavorites: (state) => {
      state.items = [];
      state.lastUpdated = new Date().toISOString();
      
      // Clear data from Local Storage
      localStorage.removeItem("recipe_favs");
      localStorage.removeItem("favs_last_updated");
    },
  },
});

export const { addFavorite, removeFavorite, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;