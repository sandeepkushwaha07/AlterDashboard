import React, { useState } from 'react';
import BoardSection from './BoardSection';

const initialTasks = {
  todo: [
    { id: '1', name: 'Design UI Mockup', date: '2025-02-22', status: 'To-Do' },
    { id: '2', name: 'Prepare Report', date: '2025-02-23', status: 'To-Do' },
    { id: '3', name: 'Fix Navigation Bar', date: '2025-02-24', status: 'To-Do' },
  ],
  inProgress: [
    { id: '4', name: 'Develop Backend API', date: '2025-02-25', status: 'In-Progress' },
    { id: '5', name: 'Unit Testing', date: '2025-02-26', status: 'In-Progress' },
    { id: '6', name: 'Optimize Database', date: '2025-02-27', status: 'In-Progress' },
  ],
  completed: [
    { id: '7', name: 'Fix UI Bugs', date: '2025-02-20', status: 'Completed' },
    { id: '8', name: 'Client Meeting', date: '2025-02-21', status: 'Completed' },
    { id: '9', name: 'Deploy New Features', date: '2025-02-22', status: 'Completed' },
  ],
};

const TaskBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);

  
  const updateTaskStatus = (taskId, newStatus) => {
    let taskToMove;
    let updatedTasks = { ...tasks };

   
    Object.keys(updatedTasks).forEach((section) => {
      updatedTasks[section] = updatedTasks[section].filter((task) => {
        if (task.id === taskId) {
          taskToMove = { ...task, status: newStatus };
          return false;
        }
        return true;
      });
    });

    
    if (taskToMove) {
      updatedTasks[newStatus.toLowerCase().replace('-', '')].push(taskToMove);
    }

    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-between gap-3">
        <div className="listBoard">
          <BoardSection title="To-Do" tasks={tasks.todo} color="#e0b3ff" updateTaskStatus={updateTaskStatus} />
        </div>
        <div className="listBoard">
          <BoardSection title="In-Progress" tasks={tasks.inProgress} color="#b3e0ff" updateTaskStatus={updateTaskStatus} />
        </div>
        <div className="listBoard">
          <BoardSection title="Completed" tasks={tasks.completed} color="#b3ffb3" updateTaskStatus={updateTaskStatus} />
        </div>
      </div>
    </div>
  );
};

export default TaskBoard;
