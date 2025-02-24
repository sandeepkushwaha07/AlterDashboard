import React from "react";
import TaskSection from "./TaskSection";
import "bootstrap/dist/css/bootstrap.min.css";

const tasksTodo = [
  { name: "Task 1", date: "2025-02-21", status: "Pending", category: "Work" },
  { name: "Task 2", date: "2025-02-22", status: "Pending", category: "Home" },
];

const tasksInProgress = [
  { name: "Task 3", date: "2025-02-20", status: "In Progress", category: "Work" },
];

const tasksCompleted = [
  { name: "Task 4", date: "2025-02-18", status: "Completed", category: "Personal" },
];

const TasklistBoard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <TaskSection title={`Todo (${tasksTodo.length})`} tasks={tasksTodo} color="#e0b3ff" />
        </div>
        <div className="col-sm-4">
          <TaskSection title={`In-Progress (${tasksInProgress.length})`} tasks={tasksInProgress} color="#b3e0ff" />
        </div>
        <div className="col-sm-4">
          <TaskSection title={`Completed (${tasksCompleted.length})`} tasks={tasksCompleted} color="#b3ffb3" />
        </div>
      </div>
    </div>
  );
};

export default TasklistBoard;
