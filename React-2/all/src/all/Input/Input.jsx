
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
        {print ? <h1 className='text-2xl'> Store : {data}</h1> : null}
        <label className='p-1 bg-gray-500 border' onClick={() => setprint(true)}>Store</label>
        <input type="text" onChange={getData} placeholder='text' className='border border-black ml-3 placeholder:pl-2 rounded-md' />
      </div>
    </>
  )
}

// input type text value set diffrent name <lable> 

// const Input = () => {

//   const [inputValue, setInputValue] = useState('');
//   const [labels, setLabels] = useState([]);

//   const change = (e) => {
//     setInputValue(e.target.value);
//   };

//   const save = () => {
//     if (inputValue) {
//       const newLabels = [...labels, ` ${inputValue}`];
//       setLabels(newLabels);
//       setInputValue('');
//     }
//   };

//   return (
//     <div>
//       <label>Input Value: </label>
//       <input type="text" value={inputValue} onChange={change} className='border border-gray-700 mr-2'/>
//       <button className='bg-gray-500 p-1' onClick={save}>Save Label</button>

//       <div>
//         <h2>Stored Labels:</h2>
//         <ul>
//           {labels.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

export default Input