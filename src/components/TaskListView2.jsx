import React from 'react';
import TaskSection from './TaskSection';

const tasksTodo = [
  { name: 'Interview with Design Team', date: 'Today', status: 'TO-DO', category: 'Work' },
  { name: 'Team Meeting', date: '30 Dec, 2024', status: 'TO-DO', category: 'Personal' },
  { name: 'Design a Dashboard page ', date: '31 Dec, 2024', status: 'TO-DO', category: 'Work' },
  { name: ' Dashboard along with wireframes', date: '31 Jan, 2025', status: 'TO-DO', category: 'Work' },
  { name: '', date: '', status: '', category: '' },
  { name: '', date: '', status: '', category: '' },
  { name: '', date: '', status: '', category: '' },
];

const tasksInProgress = [
  { name: 'Morning Workout', date: 'Today', status: 'IN-PROGRESS', category: 'Work' },
  { name: 'Code Review', date: 'Today', status: 'IN-PROGRESS', category: 'Personal' },
  { name: 'Update Task Tracker', date: '25 Dec, 2024', status: 'IN-PROGRESS', category: 'Work' },
  { name: 'Update Task Tracker', date: '25 Dec, 2024', status: 'IN-PROGRESS', category: 'Work' },
  { name: 'Update Task Tracker', date: '25 Dec, 2024', status: 'IN-PROGRESS', category: 'Work' },
  { name: 'Update Task Tracker', date: '25 Dec, 2024', status: 'IN-PROGRESS', category: 'Work' },
];

const tasksCompleted = [
  { name: 'Submit Project Proposal', date: 'Today', status: 'COMPLETED', category: 'Work' },
  { name: 'Birthday Gift Shopping', date: 'Today', status: 'COMPLETED', category: 'Personal' },
  { name: 'Update Task Tracker', date: '25 Dec, 2024', status: 'IN-PROGRESS', category: 'Work' },
  { name: 'Update Task Tracker', date: '25 Dec, 2024', status: 'IN-PROGRESS', category: 'Work' },
  { name: 'Update Task Tracker', date: '25 Dec, 2024', status: 'IN-PROGRESS', category: 'Work' },
  { name: 'Update Task Tracker', date: '25 Dec, 2024', status: 'IN-PROGRESS', category: 'Work' },
];

const TaskListView2 = () => {
  return (
    <div>
      <TaskSection title="Todo (1)" tasks={tasksTodo} color="#e0b3ff" />
      <TaskSection title="In-Progress (1)" tasks={tasksInProgress} color="#b3e0ff" />
      <TaskSection title="Completed (1)" tasks={tasksCompleted} color="#b3ffb3" />
    </div>
  );
};

export default TaskListView2;
