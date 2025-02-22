import React, { useState } from 'react';
import { FaClipboardList, FaSignOutAlt, FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import "./Login.css"; 

function TaskManagement() {
  const [selectedTab, setSelectedTab] = useState('task-list');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Interview with Design Team', category: 'Work', dueDate: '2025-02-20', status: 'TO-DO' },
    { id: 2, name: 'Design Dashboard Wireframes', category: 'Work', dueDate: '2025-02-22', status: 'IN-PROGRESS' },
    { id: 3, name: 'Client Presentation', category: 'Work', dueDate: '2025-02-25', status: 'COMPLETED' },
  ]);

  const filteredTasks = tasks.filter(
    (task) =>
      (filterCategory ? task.category === filterCategory : true) &&
      (filterDate ? task.dueDate === filterDate : true)
  );

  return (
    <div className="task-dashboard container-fluid p-4">
      <div className="dashboard-header d-flex justify-content-between align-items-center">
        <h3><FaClipboardList /> TaskBuddy Dashboard</h3>
        <button className="btn btn-danger" onClick={() => alert('Logged Out!')}>
          <FaSignOutAlt /> Logout
        </button>
      </div>

      <div className="tab-bar mt-3">
        <button className={selectedTab === 'task-list' ? 'active' : ''} onClick={() => setSelectedTab('task-list')}>Task List</button>
        <button className={selectedTab === 'task-board' ? 'active' : ''} onClick={() => setSelectedTab('task-board')}>Task Board</button>
      </div>

      <div className="filters mt-3 d-flex gap-3">
        <select className="form-select" value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>
        <input type="date" className="form-control" value={filterDate} onChange={(e) => setFilterDate(e.target.value)} />
      </div>

      <div className="task-content mt-4">
        {selectedTab === 'task-list' ? (
          <div className="task-list">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Category</th>
                  <th>Due Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredTasks.map((task) => (
                  <tr key={task.id}>
                    <td>{task.name}</td>
                    <td>{task.category}</td>
                    <td>{task.dueDate}</td>
                    <td>{task.status}</td>
                    <td>
                      <button className="btn btn-primary btn-sm me-2"><FaEdit /></button>
                      <button className="btn btn-danger btn-sm"><FaTrash /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="task-board">
            <h5>Task Board View (Coming Soon...)</h5>
          </div>
        )}
      </div>

      <button className="btn btn-success add-task-btn mt-3"><FaPlus /> Add Task</button>
    </div>
  );
}

export default TaskManagement;
