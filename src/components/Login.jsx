import React from "react";
import { auth, provider, signInWithPopup } from "../firebaseConfig"; // Correct import
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User Info:", result.user);
      localStorage.setItem("user", JSON.stringify(result.user)); // Store user info
      navigate("/dashboard"); // Redirect to Dashboard
    } catch (error) {
      console.error("Login Failed:", error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-content">
        <div className="logo-section">
          <img
            src="https://dashboard.codeparrot.ai/api/image/Z7cQoK8BBwoP-oy8/task-ico.png"
            alt="TaskBuddy Logo"
            className="logo-icon"
          />
          <h1 className="app-name">TaskBuddy</h1>
        </div>
        <p className="description">
          Streamline your workflow and track progress effortlessly with our all-in-one task management app.
        </p>
        <button className="google-login-button" onClick={handleGoogleLogin}>
          <img
            src="https://dashboard.codeparrot.ai/api/image/Z7cQoK8BBwoP-oy8/rectangl-8.png"
            alt="Google Icon"
            className="google-icon"
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
