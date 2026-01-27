# 🍳 RecipeVault - Full-Stack Recipe Manager

A professional React application featuring a custom MongoDB database, integration with **TheMealDB API**, and persistent user favorites using Redux and Local Storage.

## 🚀 How to Run the Project
To run this project locally, you will need to start both the frontend and the backend.

### **1. Server (Backend)**
1. Navigate to the `/server` directory.
2. Start the server: `node server.js`

### **2. Client (Frontend)**
1. Navigate to the `/client` directory.
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

---

## 🔐 Environment Variables (`.env`)
To protect sensitive data, create a `.env` file in the **server root**.

**Required Variables:**
* `PORT`: The port for your server (e.g., `5000`).
* `MONGO_URI`: Your MongoDB Atlas connection string.

> **Note:** A `.env` file is provided in the server folder for reference.

---

## 🛠️ Technical Implementation
### **1. Clean React Architecture**
* **State Ownership**: Centralized state management using Redux Toolkit for favorites and timestamps.
* **Reusable Components**: The `RecipeCard` adapts to different pages using props (`hideControls`) to toggle management UI.
* **Custom Hooks**: Utilizes `useLocalStorage` for theme persistence and `useFetch` for data fetching to remove code repetition.

### **2. Meaningful Local Storage**
Local storage is handled **safely** with null checks and JSON parse error handling:
* **Theme Preference**: Remembers the user's Dark/Light mode selection across sessions.
* **Data Persistence**: Syncs the Favorites collection to the browser to prevent data loss on page refresh.

### **3. Great UX States**
The application explicitly handles various states to ensure a professional user experience:
* **Loading**: Visual spinners provide feedback during API requests.
* **Error**: Graceful error handling with "Try Again" functionality if requests fail.
* **Empty**: Informative messages when searches yield no results or the favorites list is empty.

---

## Database Configuration
* **Connection**: Securely connected to MongoDB Atlas via the `MONGO_URI` environment variable.
* **Setup**: No manual collection setup is required; the database will initialize automatically upon the first recipe submission