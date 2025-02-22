import React from 'react';
import TaskSection from './TaskSection';

const tasksTodo = [
  { name: '', date: '', status: '', category: '' },
  { name: ' ', date: '', status: '', category: '' },
  { name: '    ', date: '', status: '', category: '' },
];

const tasksInProgress = [
  { name: '', date: '', status: '', category: '' },
  { name: '', date: '', status: '', category: '' },
  { name: '', date: '', status: '', category: '' },
];

const tasksCompleted = [
  { name: '', date: '', status: '', category: '' },
  { name: '', date: '', status: '', category: '' },
 
];

const TaskMain1 = () => {
  return (
    <div>
      <TaskSection title="Todo (1)" tasks={tasksTodo} color="#e0b3ff" />
      <TaskSection title="In-Progress (1)" tasks={tasksInProgress} color="#b3e0ff" />
      <TaskSection title="Completed (1)" tasks={tasksCompleted} color="#b3ffb3" />
    </div>
  );
};

export default TaskMain1;
