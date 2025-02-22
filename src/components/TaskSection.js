import React from 'react';
import './TaskSection.css';

const TaskSection = ({ title, tasks = [], color }) => { // ✅ Default value for `tasks`
  return (
    <div className="task-section">
      <div className="section-header" style={{ backgroundColor: color }}>
        <h2>{title}</h2>
      </div>
      <ul className="task-list">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <li key={index} className="task-item">
              <div className="task-info">
                <span className="task-name">{task.name}</span>
                <span className="task-date">{task.date}</span>
                <span className={`task-status ${task.status.toLowerCase()}`}>
                  {task.status}
                </span>
                <span className="task-category">{task.category}</span>
              </div>
              
            </li>
          ))
        ) : (
          <p>No tasks available</p>
        )}
      </ul>
    </div>
  );
};

export default TaskSection;
