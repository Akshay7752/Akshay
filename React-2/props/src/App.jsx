// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Propes2 from './Props'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div className='flex flex-wrap  h-screen w-full justify-center  items-center sm:w-full  sm:flex-wrap md:flex md:w-full md:flex-wrap xl:flex xl:w-full'>

// <Propes2 username="C"
//   btnTaxt="click me"
//   img="https://images.pexels.com/photos/5214413/pexels-photo-5214413.jpeg?auto=compress&cs=tinysrgb&w=1600" />


// <Propes2 username="A"
//   img="https://images.pexels.com/photos/2568539/pexels-photo-2568539.jpeg?auto=compress&cs=tinysrgb&w=1600" />


// <Propes2 username="R"
//   btnTaxt="available"
//   img="https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg?auto=compress&cs=tinysrgb&w=1600" />

// <Propes2 username="S"
//   img="https://images.pexels.com/photos/1519192/pexels-photo-1519192.jpeg?auto=compress&cs=tinysrgb&w=1600" />

// </div>
//     </>
//   )
// }

// export default App

import { useState } from 'react'
import './App.css'

function App() {
  const [image, setImage] = useState("");
  const submitImage = () => {
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "akshay")
    data.append("cloud_name", "dk6jr3ca6")

    fetch("https://api.cloudinary.com/v1_1/dk6jr3ca6/image/upload", {
      method: "post",
      body: data
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      }).catch((err) => {
        console.log(err)
      })
  }
  return (
    <>
      <div>
        <div>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          <button onClick={submitImage}>upload</button>
        </div>
      </div>
    </>
  )
}
export default App
