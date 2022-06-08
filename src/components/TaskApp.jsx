import axios from "axios";
import React, { useEffect, useState } from "react";
import AddTask from "./AddTask/AddTask";

import styles from "./taskApp.module.css";

import { TaskHeader } from "./TaskHeader";
import Tasks from "./Tasks/Tasks";

const TaskApp = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios.get("http://localhost:8080/tasks").then((res) => {
      setData(res.data);
    });
  };

  const saveData = () => {};

  useEffect(() => {
    getData();
  }, []);

  const handleData = () => {
    getData();
  };

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      <TaskHeader />
      <AddTask onSave={handleData} />
      <Tasks data={data} onSave={getData} />
    </div>
  );
};

export default TaskApp;
