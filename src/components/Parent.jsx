import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Parent = () => {
  const { count, setCount } = useContext(CounterContext);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div>
      Count is : {count}
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Parent;
