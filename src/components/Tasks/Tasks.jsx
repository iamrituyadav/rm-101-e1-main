import axios from "axios";
import React, { useEffect, useState } from "react";
import Task from "../Task/Task";
import styles from "./tasks.module.css";

const Tasks = (e) => {
  const [data, setData] = useState([]);

  const handleDelete = (e) => {
    var filteredData = data.filter((item) => {
      return e.id !== item.id;
    });

    setData(filteredData);

    axios.post("http://localhost:8080/tasks", filteredData).then(() => {
      alert("Deleted");
      e.onSave();
    });
  };

  useEffect(() => {
    setData(e.data);
  }, [e.data]);
  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        {data.map((e) => {
          return <Task e={e} key={e.id} onDelete={handleDelete} />;
        })}
      </ul>
      <div data-testid="tasks-empty" className={styles.empty}>
        {}
      </div>
    </>
  );
};

export default Tasks;
