import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig"; // Import Firebase Auth
import { signOut } from "firebase/auth";
import "./Header.css";
import skpic from "../assets/sandeep2.jpg";
import FilterSearchAddTask from "./FilterSearchAddTask";
import FilterBoard from "./FilterBoard";

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("task-list"); // Default: Task List

  const handleLogout = async () => {
    try {
      await signOut(auth); // Firebase sign-out
      localStorage.removeItem("user"); // Clear user from localStorage
      navigate("/"); // Redirect to login page
    } catch (error) {
      console.error("Logout Failed:", error);
    }
  };

  return (
    <div className="dashboard">
      {/* Header Section */}
      <div className="header">
        <div className="title">
          <img
            src="https://dashboard.codeparrot.ai/api/image/Z7cQoK8BBwoP-oy8/task-ico.png"
            alt="task icon"
            className="task-icon"
          />
          <span className="app-title">TaskBuddy</span>

          {/* Tab Navigation */}
          <div className="tabs">
            <button
              className={`tab ${activeTab === "task-list" ? "active" : ""}`}
              onClick={() => setActiveTab("task-list")}
            >
              <img src="https://dashboard.codeparrot.ai/api/image/Z7cQoK8BBwoP-oy8/list-ico.png" alt="list icon" className="tab-icon" />
              <span>List</span>
            </button>

            <button
              className={`tab ${activeTab === "board-view" ? "active" : ""}`}
              onClick={() => setActiveTab("board-view")}
            >
              <img src="https://dashboard.codeparrot.ai/api/image/Z7cQoK8BBwoP-oy8/group-11.png" alt="board icon" className="tab-icon" />
              <span>Board</span>
            </button>
          </div>
        </div>

        {/* User Section */}
        <div className="user-section">
          <div className="user-info">
            <img src={skpic} alt="user avatar" className="user-avatar" />
            <span className="username">Sandeep</span>
          </div>
          <button className="logout-button" onClick={handleLogout}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z7cQoK8BBwoP-oy8/logout-i.png" alt="logout icon" className="logout-icon" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Conditional Rendering based on Active Tab */}
      {activeTab === "task-list" ? <FilterSearchAddTask /> : <FilterBoard />}
    </div>
  );
};

export default Dashboard;
