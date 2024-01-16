import React from "react";
import { useState } from "react";

const Use_state = () => {
  const [count, setcount] = useState(0);

  function Increment() {
    setcount(count + 1);
  }
  function Decrement() {
    setcount(count - 1);
  }
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex ">
        <div className="button text-center text-lg">{count}</div>
        <div>
          <button className="button" onClick={Increment}>
            Increment
          </button>
          <button className="button" onClick={Decrement}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Use_state;
