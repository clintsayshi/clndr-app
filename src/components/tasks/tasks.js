import React from "react";

import task from "./tasks.module.scss";

export default function Tasks() {
  return (
    <div className={`${task.tasks} box-padding`}>
      <div className={task.task}>
        <input
          className={task.task__input}
          type="checkbox"
          name="task"
          id="taskid"
        />
        <small className={task.task__time}>14:00</small>
        <label htmlFor="taskid" className={task.task__name}>
          Name of task
        </label>
      </div>
      <div className={task.task}>
        <input
          className={task.task__input}
          type="checkbox"
          name="task"
          id="taskid2"
        />
        <small className={task.task__time}>14:00</small>
        <label htmlFor="taskid2" className={task.task__name}>
          Name of task
        </label>
      </div>
    </div>
  );
}
