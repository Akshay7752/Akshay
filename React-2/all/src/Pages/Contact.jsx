import React from 'react'
import Navbar from '../Components/Navbar'
import { Link, Outlet } from 'react-router-dom'

function Contact() {
  return (
    <div>
      <Navbar/>
      <h1 className='text-3xl text-center'>This is Contact page</h1>
      <Link to='C1' className='link'>c1 data</Link>
      <Link to='C2' className='link'>c2 data</Link>
      <Link to='C3' className='link'>c3 data</Link>
      <Outlet/>
    </div>
  )
}

export default Contact
