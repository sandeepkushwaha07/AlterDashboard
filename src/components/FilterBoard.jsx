import React, { useState, useEffect } from 'react';
import { GoChevronDown } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import TaskListView from './TaskListView';
import TaskBoardLayout from './TaskBoardLayout';
import TaskBoard3 from './TaskBoard3';
import './filterBoardCss.css';

const FilterBoard = ({ style = {} }) => {
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const categories = {
    "Task Section 1": TaskBoardLayout,
    "Task Section 2": TaskListView,
    "Task Section 3": TaskBoard3,
  };

  const dueDates = ["Today", "25 Dec, 2024", "30 Dec, 2024", "31 Dec, 2024"];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-btn") && !event.target.closest(".dropdown-menu")) {
        setShowCategoryDropdown(false);
        setShowDateDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <div className="filter-board" style={style}>
        <div className="filter-row">
          <span className="filter-label">Filter by:</span>

          <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
            {/* Category Dropdown */}
            <div className="dropdown-btn" onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}>
              <span>{selectedCategory || "Select Category"}</span>
              <GoChevronDown style={{ opacity: 0.6 }} />
            </div>

            {showCategoryDropdown && (
              <div className="dropdown-menu">
                {Object.keys(categories).map((category, index) => (
                  <div 
                    key={index} 
                    onClick={() => {
                      setSelectedCategory(category);
                      setShowCategoryDropdown(false);
                    }}
                  >
                    {category}
                  </div>
                ))}
              </div>
            )}

            {/* Due Date Dropdown */}
            <div className="dropdown-btn" onClick={() => setShowDateDropdown(!showDateDropdown)}>
              <span>{selectedDate || "Select Due Date"}</span>
              <GoChevronDown style={{ opacity: 0.6 }} />
            </div>

            {showDateDropdown && (
              <div className="dropdown-menu">
                {dueDates.map((date, index) => (
                  <div 
                    key={index} 
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

        {/* Search Box */}
        <div className='search'>
          <div className="search-box">
            <CiSearch style={{ opacity: 0.6, marginRight: '4px' }} />
            <input type="text" placeholder="Search" />
          </div>
          <button className="add-task-btn">ADD TASK</button>
        </div>
      </div>

      {/* Selected Category Section */}
      <div className="selected-category">
        {selectedCategory ? React.createElement(categories[selectedCategory]) : <TaskBoardLayout />}
      </div>
    </>
  );
};

export default FilterBoard;
