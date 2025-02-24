import React, { useState } from 'react';
import TaskSection from './TaskSection';

const initialTasks = {
  todo: [
    { id: '1', name: '', date: '', status: '', category: '' },
    { id: '2', name: '', date: '', status: '', category: '' },
    { id: '3', name: '', date: '', status: '', category: '' },
    { id: '4', name: '', date: '', status: '', category: '' },
    { id: '5', name: '', date: '', status: '', category: '' },
    { id: '6', name: '', date: '', status: '', category: '' },
  ],
  inProgress: [
    { id: '7', name: '', date: '', status: '', category: '' },
    { id: '8', name: '', date: '', status: '', category: '' },
    { id: '9', name: '', date: '', status: '', category: '' },
    { id: '10', name: '', date: '', status: '', category: '' },
  ],
  completed: [
    { id: '11', name: '', date: '', status: '', category: '' },
    { id: '12', name: '', date: '', status: '', category: '' },
    { id: '13', name: '', date: '', status: '', category: '' },
  ],
};

const TaskMain1 = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = ['All', 'Work', 'Personal', 'Office', 'Others'];


  const getFilteredTasks = (section) => {
    if (selectedFilter === 'All') return initialTasks[section];
    return initialTasks[section].filter((task) => task.category === selectedFilter);
  };

  return (
    <div>
     
      <div style={{ marginBottom: '20px', display: 'none' }}>
        <label>Filter by Category: </label>
        <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

    
      <TaskSection title="To-Do" tasks={getFilteredTasks('todo')} color="#e0b3ff" />
      <TaskSection title="In-Progress" tasks={getFilteredTasks('inProgress')} color="#b3e0ff" />
      <TaskSection title="Completed" tasks={getFilteredTasks('completed')} color="#b3ffb3" />
    </div>
  );
};

export default TaskMain1;
