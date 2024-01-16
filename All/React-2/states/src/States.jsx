import { useState } from "react";

const States = () => {
  let [count, setcount] = useState(0);

  const addValue = () => {
    setcount(count + 1);
  };
  const removeValue = () => {
    setcount(count - 1);
  };

  return (
    <>
      <div className="grid place-content-center h-screen">
        <h1 className="font-bold text-5xl">count = {count}</h1>
        <div className="text-center mt-4">
          <button className="border border-black p-1 m-1 rounded-md bg-black hover:text-white " onClick={addValue}>
            Add
          </button>
          <button className="border border-black p-1 m-1 rounded-md bg-black hover:text-white " onClick={removeValue}>Remove</button>
        </div>
      </div>
    </>
  );
};
export default States
