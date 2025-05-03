// src/index.js or src/main.jsx (depending on your setup)
import React from 'react';
import ReactDOM from 'react-dom/client';  // For React 18+, use `react-dom/client`
import { AuthProvider } from './contexts/AuthContext';  // Import the AuthProvider
import App from './App';  // Your main App component

// Import the CSS file for styling
import './index.css';  // This imports the global styles from index.css

// Render the App with AuthProvider to wrap the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
