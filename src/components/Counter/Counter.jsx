import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = (e) => {
  const [count, setCount] = useState(e.e);

  const handleClick = (v) => {
    if (v === -1) {
      if (count > 1) {
        setCount(count + v);
      } else {
        setCount(count);
      }
    } else {
      setCount(count + v);
    }
  };

  return (
    <div className={styles.counter}>
      <button
        data-testid="task-counter-increment-button"
        onClick={() => handleClick(1)}
      >
        +
      </button>
      <span data-testid="task-counter-value">{count}</span>
      <button
        data-testid="task-counter-decrement-button"
        onClick={() => handleClick(-1)}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
