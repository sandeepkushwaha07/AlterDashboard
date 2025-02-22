import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEZIXYhKsQ0bYVGK5M4EVEKKuKRW5DM-U",
  authDomain: "alterdashboard.firebaseapp.com",
  projectId: "alterdashboard",
  storageBucket: "alterdashboard.appspot.com", // Corrected storage bucket URL
  messagingSenderId: "849141524047",
  appId: "1:849141524047:web:f60216876c6dba6b4cac3a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(); // Google authentication provider

// ✅ Export the required Firebase authentication methods
export { app, auth, provider, signInWithPopup };
