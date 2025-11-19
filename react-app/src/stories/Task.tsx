// src/components/Task.js
import React from "react";

interface TaskProps {
  task: {
    id: number;
    title: string;
    state: string;
  };
}

export function Task({ task }: TaskProps) {
  return (
    <div>
      <input type="checkbox" checked={task.state === "TASK_DONE"} readOnly />
      <span
        className={`title ${task.state === "TASK_DONE" ? "line-through" : ""}`}
      >
        {task.title}
      </span>
    </div>
  );
}
