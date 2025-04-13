// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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