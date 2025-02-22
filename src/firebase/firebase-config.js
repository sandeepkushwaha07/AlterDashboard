// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAmc4dVMD24C8foC-0RAfclWq3xRsWU1sI",
//   authDomain: "login1-b4c4f.firebaseapp.com",
//   projectId: "login1-b4c4f",
//   storageBucket: "login1-b4c4f.firebasestorage.app",
//   messagingSenderId: "120302230630",
//   appId: "1:120302230630:web:4c482d3e37a2f6b781a1a7"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app)

// export {app, auth};



import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider(); // Fix: Renamed variable for clarity

export { app, auth, googleProvider }; // Fix: Export `googleProvider`
