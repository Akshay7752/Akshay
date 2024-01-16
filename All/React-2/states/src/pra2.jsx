
// input type text value set diffrent name <lable> 

import React from 'react'
import { useState } from 'react';

const Input = () => {

  const [data, setdata] = useState(null);
  const [print, setprint] = useState();

  const getData = (val) => {
    // console.log(val.target.value);
    setdata(val.target.value)
    setprint(false)
  }
  return (
    <>
      <div className='mt-5 ml-[40%]'>
        {print ? <h1 className='text-2xl'> store the data : {data}</h1> : null}
        <input type="text" onChange={getData} placeholder='text' className='border border-black ml-3 placeholder:pl-2 rounded-md'/>
        <label className='p-1 border border-black' onClick={() => setprint(true)}>label:{data}</label>
      </div>
    </>
  )
}

export default Input