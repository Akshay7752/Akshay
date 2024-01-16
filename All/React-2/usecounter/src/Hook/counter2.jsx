import React from 'react'
import useCounter from './counter';

const Counter2 = () => {


    const [count  , Increment , Decrement , Reset] = useCounter(10);
  return (
    <div>
      <span className="button">{count}</span>
        <button className="button" onClick={Increment}>
          Increment
        </button>
        <button className="button" onClick={Decrement}>
          Decrement
        </button>
        <button className="button" onClick={Reset}>Reset</button>
    </div>
  )
}

export default Counter2