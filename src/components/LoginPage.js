import React, { useState } from "react";
import { auth, provider } from "../firebaseConfig"; 
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"; 
import "./LoginPage.css";
import TaskMain1 from './TaskMain1'

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      const result = await signInWithPopup(auth, provider);
      localStorage.setItem("user", JSON.stringify(result.user)); 
      navigate("/dashboard"); 
    } catch (error) {
      console.error("Login Failed:", error);
      setError("Failed to log in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid login-container">
      <div className="row">
        {/* Left Side: Circle Design */}
        <div className="col-md-9 d-flex align-items-center justify-content-center circle-container">
          <div className="circle-wrapper">
            <div className="circle circle1">
            <div className="circle circle2">
            <div className="circle circle3"></div>
           <div className="DatashowLogin">
           <TaskMain1/>
           </div>
            
            </div>
            
            </div>
           
          </div>
        </div>

        {/* Right Side: Login Content */}
        <div className="col-md-3 d-flex align-items-center justify-content-center">
          <div className="login-box">
            <h3 className="login-heading">Welcome to TaskBuddy</h3>
            <p className="login-text">
              Streamline your workflow and track progress effortlessly.
            </p>

            {error && <p className="error-message">{error}</p>} 

            <button className="google-btn" onClick={handleGoogleLogin} disabled={loading}>
              {loading ? "Signing in..." : <><FcGoogle className="google-icon" /> Continue with Google</>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
