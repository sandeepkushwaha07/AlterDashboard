import React from 'react';
import './BoardSection.css';

const BoardSection = ({ title, tasks = [], color }) => { // ✅ Default value for `tasks`
  return (
    <div className="board-section">
      <div className="board-header" style={{ backgroundColor: color }}>
        <h2>{title}</h2>
      </div>
      {/* Added d-flex and row class */}
      <ul className="board-list d-flex row">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <li key={index} className="board-item col-md-4"> {/* Responsive grid */}
              <div className="board-info">
                <span className="board-task-name">{task.name}</span>
                <span className="board-task-date">{task.date}</span>
                <span className={`board-task-status ${task.status.toLowerCase()}`}>
                  {task.status}
                </span>
                <span className="board-task-category">{task.category}</span>
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

export default BoardSection;
