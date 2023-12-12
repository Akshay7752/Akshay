import React, { useState } from 'react'

const States = () => {

    let [count, setcount] = useState(0);

    const addValue = () => {
        // console.log(count);
        // count = count + 1;
        setcount(count + 1)
    }
    const removeValue = () => {
        // console.log(count);
        // count = count - 1;
        setcount(count - 1);
    }
    return (
        <>
            <div className='grid place-items-center h-screen bg-slate-400'>
                <div className=''>
                    <h1 className='font-bold text-5xl'>Count Value = {count}</h1>
                    <div className='text-center mt-4'>
                    <button className='border border-black p-1 m-1 text-white bg-black rounded-md' onClick={addValue}>Add</button>
                    <button className='border border-black p-1 m-1 text-white bg-black rounded-md' onClick={removeValue}>Remove</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default States
