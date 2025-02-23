import React, { useState } from "react";
import BoardSection from "./BoardSection";

const initialTasks = {
  todo: [
    { id: "1", name: "Task 1", date: "2025-02-23", status: "Pending", category: "Work" },
    { id: "2", name: "Task 2", date: "2025-02-24", status: "Completed", category: "Personal" },
  ],
  inProgress: [
    { id: "3", name: "Task 3", date: "2025-02-25", status: "In Progress", category: "Office" },
  ],
  completed: [
    { id: "4", name: "Task 4", date: "2025-02-26", status: "Completed", category: "Others" },
  ],
};

const TaskListView = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="dropdownBoard">
    

      {/* Task Sections (Not Affected by Dropdown) */}
      <BoardSection title="To-Do" tasks={initialTasks.todo} color="#e0b3ff" />
      <BoardSection title="In-Progress" tasks={initialTasks.inProgress} color="#b3e0ff" />
      <BoardSection title="Completed" tasks={initialTasks.completed} color="#b3ffb3" />
    </div>
  );
};

export default TaskListView;
