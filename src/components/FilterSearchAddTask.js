import React, { useState } from "react";
import "./FilterSearchAddTask.css";
import { GoChevronDown } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import TaskListView from "./TaskListView";
import TaskSection from "./TaskSection";
import TaskListDrop from "./TaskListDrop";
import TaskMain1 from "./TaskMain1";
import Taskempaty from './Taskempaty';
import TaskListView2 from "./TaskListView2";

const FilterSearchAddTask = ({ style }) => {
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTask, setSelectedTask] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // 🔍 Search state

  // Categories for selection
  const categories = {
    "Task List View": Taskempaty,
    "Task Section 1": TaskListView,
    "Task Section 2": TaskListDrop,
    "Task Section 3": TaskListView2,
  };

  // Due Date Options
  const dueDates = ["Today", "25 Dec, 2024", "30 Dec, 2024", "31 Dec, 2024"];

  // Filter tasks based on search term
  const filterTasks = (tasks) => {
    return tasks.filter(task => 
      task.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.date.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="filter-search-add-task" style={style}>
      {/* Filter Section */}
      <div className="filters-container">
        <span className="filter-by">Filter by:</span>

        <div className="filters">
          {/* Category Dropdown */}
          <div
            className="filter-button"
            onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
          >
            <span>{selectedCategory || "Select Category"}</span>
            <GoChevronDown className="dropdown-icon" />
          </div>

          {/* Category Dropdown List */}
          {showCategoryDropdown && (
            <div className="dropdown-menu">
              {Object.keys(categories).map((category, index) => (
                <div
                  key={index}
                  className="dropdown-item"
                  onClick={() => {
                    setSelectedCategory(category);
                    setSelectedTask(null);
                    setShowCategoryDropdown(false);
                  }}
                >
                  {category}
                </div>
              ))}
            </div>
          )}

          {/* Due Date Dropdown */}
          <div
            className="filter-button"
            onClick={() => setShowDateDropdown(!showDateDropdown)}
          >
            <span>{selectedDate || "Select Due Date"}</span>
            <GoChevronDown className="dropdown-icon" />
          </div>

          {/* Due Date Dropdown List */}
          {showDateDropdown && (
            <div className="dropdown-menu">
              {dueDates.map((date, index) => (
                <div
                  key={index}
                  className="dropdown-item"
                  onClick={() => {
                    setSelectedDate(date);
                    setShowDateDropdown(false);
                  }}
                >
                  {date}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Search Bar and Add Task Button */}
      <div className="search-container">
        <div className="search-input">
          <CiSearch className="search-icon" />
          <input 
            type="text" 
            placeholder="Search by name or date" 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
        </div>
        <button className="add-task-button">ADD TASK</button>
      </div>

      {/* Render Selected Task or Category */}
      <div className="category-view">
        {selectedTask ? (
          <div className="selected-task">
            <h3>Selected Task</h3>
            <p><strong>Name:</strong> {selectedTask.name}</p>
            <p><strong>Date:</strong> {selectedTask.date}</p>
            <p><strong>Status:</strong> {selectedTask.status}</p>
            <p><strong>Category:</strong> {selectedTask.category}</p>
          </div>
        ) : selectedCategory && categories[selectedCategory] ? (
          React.createElement(categories[selectedCategory], {
            filterTasks, // Pass filter function
            onSelectTask: setSelectedTask,
          })
        ) : (
          <Taskempaty onSelectTask={setSelectedTask} />
        )}
      </div>
    </div>
  );
};

FilterSearchAddTask.defaultProps = {
  style: {},
};

export default FilterSearchAddTask;
