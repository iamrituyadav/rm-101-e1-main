import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = () => {
  // sample values to be replaced
  const [totalTask, setTotalTask] = useState(0);
  const [unCompletedTask, setUnCompletedTask] = useState(0);
  useEffect(() => {
    axios.get("http://localhost:8080/tasks").then((res) => {
      setTotalTask(res.data.length);

      var filteredData = res.data.filter((e) => {
        return e.done === false;
      });
      setUnCompletedTask(filteredData.length);
    });
  }, []);

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <h1>Todo List</h1>
      <h2>{`You have ${unCompletedTask} of ${totalTask} tasks remaining`}</h2>
      {/* <b data-testid="header-remaining-task">{unCompletedTask}</b>
      <b data-testid="header-total-task">{totalTask}</b> */}
    </div>
  );
};

export default TaskHeader;
