import React from 'react'
import useCounter from './useCounter';

const Counter2 = () => {


    const [count  , Increment , Decrement] = useCounter(10);
  return (
    <div>
        <h1 className='text-2xl font-bold'>Hook 2</h1>
      <span className="button bg-orange-700">{count}</span>
        <button className="button bg-orange-700" onClick={Increment}>
          Increment
        </button>
        <button className="button bg-orange-700" onClick={Decrement}>
          Decrement
        </button>
    </div>
  )
}

export default Counter2