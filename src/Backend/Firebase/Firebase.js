// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyCsZmlNvxE1FPks93CZFyUevn2JqtAOOco",          // Your API key
  authDomain: "authentication-d0f1b.firebaseapp.com",         // Firebase auth domain
  projectId: "authentication-d0f1b",                          // Project ID
  storageBucket: "authentication-d0f1b.firebasestorage.app",  // Cloud Storage bucket
  messagingSenderId: "924367954865",                          // Messaging sender ID
  appId: "1:924367954865:web:abc3c480950db7455e1390"          // App ID
};

// Initialize Firebase app instance
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export
const auth = getAuth(app);
export { auth }; // Export auth instance for use in authentication-related operations
