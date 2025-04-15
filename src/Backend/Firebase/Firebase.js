
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsZmlNvxE1FPks93CZFyUevn2JqtAOOco",
  authDomain: "authentication-d0f1b.firebaseapp.com",
  projectId: "authentication-d0f1b",
  storageBucket: "authentication-d0f1b.firebasestorage.app",
  messagingSenderId: "924367954865",
  appId: "1:924367954865:web:abc3c480950db7455e1390"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth}