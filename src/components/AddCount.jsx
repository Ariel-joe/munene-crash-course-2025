import React, { useState } from "react";

const AddCount = () => {
  const [count, setCount] = useState(0);

  const incrementFunc = () => {
    setCount(count + 1);
  };

  const decrementFunc = () => {
    setCount((prevCount) => {
      return prevCount - 1;
    });
  };
  return (
    <div>
      <button
        onClick={incrementFunc}
        className="bg-blue-500 text-white px-4 py-2"
      >
        +
      </button>
      <span>{count}</span>
      <button onClick={decrementFunc} className="bg-red-500 text-white px-4 py-2">-</button>
    </div>
  );
};

export { AddCount };
