// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

import About from './Pages/About';
import Home from './Pages/Home';
import Product from './Pages/Product';

import Error404 from './Pages/Error404';
import User from './Pages/User';
import C3 from './Pages/c3';
import C2 from './Pages/c2';
import C1 from './Pages/c1';
import Contact from './Pages/Contact';

function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/product" element={<Product/>}></Route>
            <Route path="/*" element={<Error404/>}></Route>
            <Route path="/user/:name" element={<User/>}></Route>
            <Route path="/Contact/" element={<Contact/>}>
              <Route path='C1' element={<C1/>}/>
              <Route path='C2' element={<C2/>}/>
              <Route path='C3' element={<C3/>}/>
            </Route>
          </Routes>
        </BrowserRouter>

        {/* <Navbar/>
        <Home/>
        <About/>
        <Product/> */}


      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
      {/* <States/> */}
      {/* <Input/> */}
      {/* <CheckBox/> */}
      {/* <Task1/> */}
      {/* <UseState_2/> */}
      {/* <Hook/> */}
      {/* <UseStates/> */}

      {/* <UseEffect1/> */}
      {/* <UseEffect2/> */}

      {/* <Data_Fetch_WithoutAxois/> */}
      {/* <Data_fetch1/> */}
      {/* <Data_fetch2/> */}
      {/* <Task2/> */}
      {/* <Task1/> */}
      {/* <ParentComponent/> */}


      {/* <UseRef/> */}
      {/* <HookCustoms/> */}
      {/* <Counter2/> */}
      {/* <InputFocus/> */}

      {/* <Fake/> */}


      {/* <ClassComponents/> */}
    </>
  )
}

export default App
