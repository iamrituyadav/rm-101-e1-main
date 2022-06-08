import React from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = (e) => {
  const handleChange = (e) => {
    if (e.e.done === true) {
      console.log("done");
    }
  };

  const { onDelete } = e;

  return (
    <li data-testid="task" className={styles.task}>
      <div>
        {" "}
        <input
          type="checkbox"
          data-testid="task-checkbox"
          onChange={(e) => handleChange(e)}
        />
        <div data-testid="task-text">{e.e.text}</div>
      </div>

      <div>
        <Counter e={e.e.count} />
        <button
          data-testid="task-remove-button"
          className="delete"
          onClick={() => {
            onDelete(e.e.id);
          }}
        >
          X
        </button>
      </div>
    </li>
  );
};

export default Task;
