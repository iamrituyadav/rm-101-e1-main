import axios from "axios";
import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = (props) => {
  const { onSave } = props;
  const [todo, setTodo] = useState({
    id: "",
    text: "",
    done: false,
    count: 1,
  });

  const handleChange = (e) => {
    setTodo({ ...todo, text: e.target.value });
  };

  const handleSubmit = () => {
    axios.post("http://localhost:8080/tasks", todo).then(() => {
      alert("Todo Set");
      // callback method
      onSave();
    });

    console.log("todo", todo);
  };
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.todoForm}>
      <input
        data-testid="add-task-input"
        type="text"
        onChange={(e) => handleChange(e)}
      />
      <button data-testid="add-task-button" onClick={() => handleSubmit()}>
        +
      </button>
    </div>
  );
};

export default AddTask;
