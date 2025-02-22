import React, { useState } from 'react';
import BoardView from './BoardView';
import TaskSection from './TaskSection';
import { Container, Row, Col } from 'react-bootstrap';
import BoardSection from './BoardSection';

const initialTasks = {
  todo: [
    { id: '1', name: '', date: '', status: '',},
    { id: '2', name: '', date: '', status: '', },
    { id: '1', name: '', date: '', status: '',},
   
  ],
  inProgress: [
    { id: '3', name: '', date: '', status: '' },
    { id: '3', name: '', date: '', status: '' },
    { id: '3', name: '', date: '', status: '' },
    
  ],
  completed: [
    { id: '4', name: '', date: '', status: '',},
    { id: '4', name: '', date: '', status: '',},
    { id: '4', name: '', date: '', status: '',},
   
  ],
};

const TaskBoardLayout = () => {
  const [tasks, setTasks] = useState(initialTasks);

  // 📌 Task Status Update Function
  const updateTaskStatus = (taskId, newStatus) => {
    let updatedTasks = { ...tasks };
    let taskToMove;

    // Find and remove task from the current section
    Object.keys(updatedTasks).forEach((section) => {
      updatedTasks[section] = updatedTasks[section].filter((task) => {
        if (task.id === taskId) {
          taskToMove = { ...task, status: newStatus };
          return false;
        }
        return true;
      });
    });

    // Add task to the new section
    if (taskToMove) {
      if (newStatus === 'To-Do') updatedTasks.todo.push(taskToMove);
      else if (newStatus === 'In-Progress') updatedTasks.inProgress.push(taskToMove);
      else if (newStatus === 'Completed') updatedTasks.completed.push(taskToMove);
    }

    setTasks(updatedTasks);
  };

  return (
    <div  className="Container" >
    <div
  className="row"
  style={{
    display: "flex",
    width: "310px",
    justifyContent: "space-between",
    gap: "20px",
  }}
>
        
        <div className="listBoard">
          <BoardSection title="To-Do" tasks={tasks.todo} color="#e0b3ff" updateTaskStatus={updateTaskStatus}/>
          
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

export default TaskBoardLayout;
