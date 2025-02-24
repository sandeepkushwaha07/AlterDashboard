import React, { useState } from 'react';
import { FaClipboardList, FaSignOutAlt } from 'react-icons/fa';
import './Login.css';

function TaskManagement() {
  const [selectedTab, setSelectedTab] = useState('task-list');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [user, setUser] = useState({
    name: 'John Doe',
   
  });

  const tasks = [
    { id: 1, name: 'Task 1', category: 'Design', dueDate: '2025-02-20' },
    { id: 2, name: 'Task 2', category: 'Development', dueDate: '2025-02-21' },
    { id: 3, name: 'Task 3', category: 'Marketing', dueDate: '2025-02-22' },
  ];

  const filteredTasks = tasks.filter(
    (task) =>
      (filterCategory ? task.category === filterCategory : true) &&
      (filterDate ? task.dueDate === filterDate : true)
  );

  const handleLogout = () => {
    setUser(null); // Logout logic (clear user data)
  };

  const handleAddTask = () => {
   
    console.log("Add Task clicked!");
  };

  return (
    <div className="task-management-dashboard">
      <div className="row">
        {/* Right Section: Tasks and Tabs */}
        <div className="col-md-6 col-12 task-section p-4">
          {/* Header */}
          <div className="task-header">
            <h3>
              <FaClipboardList /> TaskBuddy Dashboard
            </h3>
          </div>

          {/* Tab Bar */}
          <div className="tab-bar">
            <button
              className={selectedTab === 'task-list' ? 'active' : ''}
              onClick={() => setSelectedTab('task-list')}
            >
              Task List
            </button>
            <button
              className={selectedTab === 'task-board' ? 'active' : ''}
              onClick={() => setSelectedTab('task-board')}
            >
              Task Board
            </button>
          </div>

          {/* Filter Section */}
          <div className="filter-section">
            <label>Filter:</label>
            <select
              className="filter-input"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="">Categories</option>
              <option value="Design">Design</option>
              <option value="Development">Development</option>
              <option value="Marketing">Marketing</option>
            </select>

            <input
              type="date"
              id="dueDate"
              className="filter-input"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              placeholder="Due Date"
            />
          </div>
        </div>

        {/* Left Section: User Profile */}
        <div className="col-md-6 col-12 user-profile p-4">
          <div className="profile-card">
            <img src={user.profilePic} alt="Profile" className="profile-pic" />
            <h5>{user.name}</h5>
            <p>{user.email}</p>
            <button className="logout-btn" onClick={handleLogout}>
              <FaSignOutAlt /> Log Out
            </button>
          </div>

          {/* Search Bar and Add Task Button */}
          <div className="search-add-container">
            {/* Search Bar */}
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search Tasks..."
                className="form-control"
              />
            </div>

            {/* Add Task Button */}
            <div className="add-task-button mt-2">
              <button className="btn btn-success submitButton" onClick={handleAddTask}>
                Add Task
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className='dasbhoardData'>
        <div className="row">
        <div className="col-md-12 col-12 user-profile p-4">
            {selectedTab === 'task-list' && (
              <div className="task-list">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Task</th>
                      <th>Category</th>
                      <th>Due Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTasks.map((task) => (
                      <tr key={task.id}>
                        <td>{task.name}</td>
                        <td>{task.category}</td>
                        <td>{task.dueDate}</td>
                        <td>
                          <button className="btn btn-primary">Edit</button>
                          <button className="btn btn-danger ml-2">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Task Board */}
            {selectedTab === 'task-board' && (
              <div className="task-board">
                <p>Task Board - More Complex Features</p>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className='dasbhoardData'>
        <div className="row">
        <div className="col-md-12 col-12 user-profile p-4">
            {selectedTab === 'task-list' && (
              <div className="task-list2">
                <table className="table table-striped">
                  <thead>
                   
                  </thead>
                  <tbody>
                    
                   
                  </tbody>
                </table>
              </div>
            )}

            {/* Task Board */}
            {selectedTab === 'task-board' && (
              <div className="task-board">
                <p>Task Board - More Complex Features</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className='dasbhoardData'>
        <div className="row">
        <div className="col-md-12 col-12 user-profile p-4">
            {selectedTab === 'task-list' && (
              <div className="task-list3">
                <table className="table table-striped">
                  <thead>
                   
                  </thead>
                  <tbody>
                    
                   
                  </tbody>
                </table>
              </div>
            )}

            {/* Task Board */}
            {selectedTab === 'task-board' && (
              <div className="task-board">
                <p>Task Board - More Complex Features</p>
              </div>
            )}
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default TaskManagement;
