import React from 'react';
import TaskSection from './TaskSection';

const tasksTodo = [
  { name: 'Design Homepage', date: '2025-02-23', status: 'To-Do', category: 'UI' },
  { name: 'Fix Navbar Bug', date: '2025-02-24', status: 'To-Do', category: 'Bug' },
  { name: 'Design Homepage', date: '2025-02-23', status: 'To-Do', category: 'UI' },
  { name: 'Fix Navbar Bug', date: '2025-02-24', status: 'To-Do', category: 'Bug' },
  { name: 'Design Homepage', date: '2025-02-23', status: 'To-Do', category: 'UI' },
  { name: 'Fix Navbar Bug', date: '2025-02-24', status: 'To-Do', category: 'Bug' },
];

const tasksInProgress = [
  { name: 'Develop API', date: '2025-02-22', status: 'In-Progress', category: 'Backend' },
  { name: 'Style Login Page', date: '2025-02-25', status: 'In-Progress', category: 'UI' },
  { name: 'Develop API', date: '2025-02-22', status: 'In-Progress', category: 'Backend' },
  { name: 'Style Login Page', date: '2025-02-25', status: 'In-Progress', category: 'UI' },
  { name: 'Develop API', date: '2025-02-22', status: 'In-Progress', category: 'Backend' },
  { name: 'Style Login Page', date: '2025-02-25', status: 'In-Progress', category: 'UI' },
];

const tasksCompleted = [
  { name: 'Setup Firebase', date: '2025-02-20', status: 'Completed', category: 'Auth' },
  { name: 'Optimize Images', date: '2025-02-21', status: 'Completed', category: 'Performance' },
  { name: 'Setup Firebase', date: '2025-02-20', status: 'Completed', category: 'Auth' },
  { name: 'Setup Firebase', date: '2025-02-20', status: 'Completed', category: 'Auth' },
  { name: 'Optimize Images', date: '2025-02-21', status: 'Completed', category: 'Performance' },
  { name: 'Optimize Images', date: '2025-02-21', status: 'Completed', category: 'Performance' },
];

const TaskMain1 = () => {
  return (
    <div>
      <TaskSection title={`Todo (${tasksTodo.length})`} tasks={tasksTodo} color="#e0b3ff" />
      <TaskSection title={`In-Progress (${tasksInProgress.length})`} tasks={tasksInProgress} color="#b3e0ff" />
      <TaskSection title={`Completed (${tasksCompleted.length})`} tasks={tasksCompleted} color="#b3ffb3" />
    </div>
  );
};

export default TaskMain1;
