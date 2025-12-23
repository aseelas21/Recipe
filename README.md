# RecipeVault – React Homework #2 (Router & Context)

This project upgrades Homework #1 by adding:
- **Routing (React Router)**
- **Global State (React Context)**

## Routes
- `/` → Home Page
- `/form` → Form Page
- `/api` → API Page
- `*` → 404 Not Found Page

Navigation is done using **NavLink** and the URL changes when switching pages.

## Context (FavoritesContext)
I created **FavoritesContext** to store a global list of favorite recipes.
The context includes:
- `favorites` (array)
- `addFavorite(item)`
- `removeFavorite(id)`
- `isFavorite(id)`

### Where Context is used (at least 2 places)
- **Navbar**: shows the number of favorites (⭐ count)
- **RecipeCard**: button to Add/Remove favorites
- **Home Page**: displays “My Favorites” section
- **API Page**: favorites can be added from API results

## How to Run
```bash
npm install
npm run dev
