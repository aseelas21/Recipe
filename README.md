 # RecipeVault – React Project

This project was built using React + Vite as part of a university assignment.
The website includes three main pages:

1) Home Page

Displays a list of recipes stored in the app.
It uses useState, map(), and a separate RecipeCard component for clean layout.

2) Add Recipe (Form Page)

A controlled form that allows the user to add a new recipe.
It includes validation, several input fields, and image upload with preview.
Once submitted, the new recipe appears immediately on the Home Page.

3) API Recipes Page

Fetches real recipes from an online API using fetch().
The page handles loading and error states and displays the results using map().

How to Run
npm install
npm run dev

Main Concepts Used

useState + props

Controlled inputs

Validation

Fetch API

Conditional rendering (loading/error)

map() for lists

Basic CSS styling