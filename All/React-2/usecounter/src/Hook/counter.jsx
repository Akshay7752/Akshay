import { useState } from "react";

function useCounter(initialState = 0) {
  const [count, setCount] = useState(initialState);

  function Increment(){
    setCount(count + 1);
  }

  function Decrement(){
    setCount(count - 1);
  }

  function Reset(){
    setCount (initialState);
  }
  return[count , Increment , Decrement , Reset]
}

export default useCounter;