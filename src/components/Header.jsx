import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import skpic from '../assets/sandeep2.jpg';
import FilterSearchAddTask from './FilterSearchAddTask';
import FilterBoard from './FilterBoard'; // Import FilterBoard

const Header = ({ style = {} }) => {
  const location = useLocation(); // Get current route

  return (
    <>
      <div className="header" style={style}>
        <div className="title">
          <img src="https://dashboard.codeparrot.ai/api/image/Z7cQoK8BBwoP-oy8/task-ico.png" alt="task icon" className="task-icon" />
          <span className="app-title">TaskBuddy</span>

          <div className="tabs">
            <Link to="/task-list" className={`tab ${location.pathname === "/task-list" ? "active" : ""}`}>
              <img src="https://dashboard.codeparrot.ai/api/image/Z7cQoK8BBwoP-oy8/list-ico.png" alt="list icon" className="tab-icon" />
              <span>List</span>
            </Link>

            <Link to="/board-view" className={`tab ${location.pathname === "/board-view" ? "active" : ""}`}>
              <img src="https://dashboard.codeparrot.ai/api/image/Z7cQoK8BBwoP-oy8/group-11.png" alt="board icon" className="tab-icon" />
              <span>Board</span>
            </Link>
          </div>
        </div>

        <div className="user-section">
          <div className="user-info">
            <img src={skpic} alt="user avatar" className="user-avatar" />
            <span className="username">Sandeep</span>
          </div>
          <button className="logout-button">
            <img src="https://dashboard.codeparrot.ai/api/image/Z7cQoK8BBwoP-oy8/logout-i.png" alt="logout icon" className="logout-icon" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Show FilterSearchAddTask for Task List and FilterBoard for Board View */}
      {location.pathname === "/task-list" && <FilterSearchAddTask />}
      {location.pathname === "/board-view" && <FilterBoard />}
    </>
  );
};

export default Header;
