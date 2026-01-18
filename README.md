RecipeVault – React Homework #3

This project extends the previous assignment by adding React Router, Custom Hooks, and Redux Toolkit.

Routing

/ → Home

/form → Form

/api → API

* → 404 Page

Navigation is done using React Router.

Custom Hooks

useLocalStorage → stores the selected theme (Light/Dark).

useFetch → fetches API data and handles loading and error states.

Redux Toolkit

Favorites are managed globally using Redux.

Includes:

favorites list

addFavorite / removeFavorite / clearFavorites actions

Used in:

Navbar (favorites count)

RecipeCard (add/remove favorites)

Home Page (favorites display)

Run Project
npm install
npm run dev


Aseel Abu Saleh — React Homework #3