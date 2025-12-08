 # RecipeVault – React Project

This project is a simple recipe management application built as part of a university assignment using **React + Vite**.  
The website includes three main pages: **Home**, **Add Recipe (Form)**, and **API Recipes**.

The project demonstrates the use of:
- React components
- useState & props
- Controlled form inputs
- Validation
- Image upload + preview
- Lists rendering using map()
- Fetching data from a real API
- Conditional rendering (loading/error)
- Basic CSS design

---

## 🏠 Home Page
The Home Page displays a list of recipes stored inside the application.  
It uses:
- `useState()` to manage recipes
- `map()` to render multiple RecipeCard components
- Props to pass data to child components
- CSS grid layout for responsive design

When a new recipe is added through the form, it appears instantly on the Home Page.

---

## 📝 Form Page (Add Recipe)
The Add Recipe page contains a controlled form with multiple fields:

- Recipe name  
- Cook time  
- Description  
- Category  
- Difficulty  
- Vegetarian checkbox  
- **Image upload + preview**

Features:
- Full validation (minimum length, numeric fields, required image)
- Error messages
- Success message
- Sends the new recipe data back to App.jsx using props
- Automatically updates the Home Page list

---

## 🍽️ API Recipes Page
This page loads **real recipes** from an online API (Spoonacular).

Includes:
- `fetch()` request to a real API endpoint
- Loading state
- Error handling
- Rendering recipe items dynamically
- Using keys inside `map()`
- Displaying real images, names, and details

Example API endpoint used:
https://api.spoonacular.com/recipes/random?number=15&apiKey=1d1f2e8661cf4723bcf702db9d63c910


---

## 🎨 Styling
The project uses a custom `index.css` file including:
- Responsive grid layout  
- Custom Navbar  
- Styled cards  
- Styled forms  
- Buttons and badges  

Everything was built using plain CSS without UI libraries.

---

## 🛠️ Installation & Running the Project

### 1. Clone or download the project:
git clone https://github.com/aseelas21/recipe.git


### 2. Install dependencies:
npm install


### 3. Run the development server:
npm run dev


### 4. Open in browser:
http://localhost:5173/


---

## 📂 Project Structure

src/
├── components/
│ └── RecipeCard.jsx
├── pages/
│ ├── HomePage.jsx
│ ├── FormPage.jsx
│ └── ApiPage.jsx
├── assets/
│ └── logo.png
├── App.jsx
├── main.jsx
└── index.css


---

## ✅ Summary
This project successfully includes:
✔ Home Page with dynamic list  
✔ Form Page with validation and image upload  
✔ API Page with real data  
✔ useState, props, map, fetch  
✔ Clean folder structure  
✔ CSS design  
✔ Fully working React application  

This fulfills **all assignment requirements** and includes additional improvements and features.

---

## 👩‍💻 Created By:
Aseel Abu Saleh  
Recipe – React Project
