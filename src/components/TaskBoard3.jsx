import React, { useState } from 'react';
import BoardView from './BoardView';
import TaskSection from './TaskSection';
import { Container, Row, Col } from 'react-bootstrap';
import BoardSection from './BoardSection';

const initialTasks = {
  todo: [
    { id: '1', name: 'Design UI Mockup', date: '2025-02-22', status: 'To-Do',},
    { id: '2', name: 'Prepare Report', date: '2025-02-23', status: 'To-Do', },
    { id: '1', name: 'Design UI Mockup', date: '2025-02-22', status: 'To-Do',},
   
  ],
  inProgress: [
    { id: '3', name: 'Develop Backend API', date: '2025-02-24', status: 'In-Progress' },
    { id: '3', name: 'Develop Backend API', date: '2025-02-24', status: 'In-Progress' },
    { id: '3', name: 'Develop Backend API', date: '2025-02-24', status: 'In-Progress' },
    
  ],
  completed: [
    { id: '4', name: 'Fix UI Bugs', date: '2025-02-20', status: 'Completed',},
    { id: '4', name: 'Fix UI Bugs', date: '2025-02-20', status: 'Completed',},
    { id: '4', name: 'Fix UI Bugs', date: '2025-02-20', status: 'Completed',},
   
  ],
};

const TaskBoardLayout = () => {
  const [tasks, setTasks] = useState(initialTasks);

 
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
