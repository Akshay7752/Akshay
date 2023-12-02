import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Navbar , Hade , Name} from './component/navbar'
// import { Hade } from './component/navbar'

function App() {
  

  return (
    <>
      <div>
      <Navbar />
      <Hade />
      <Name />
        
      </div>
      
    </>
  )
}

export default App
