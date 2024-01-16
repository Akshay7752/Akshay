import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    
    return (
        <div>
            <div className=''>
                <nav>
                    <ul className='flex justify-around bg-amber-700 text-white h-10 items-center'>
                        <li><NavLink className='underline text-white text-2xl hover:text-red-600' to="/">Home</NavLink></li>
                        <li><NavLink className='underline text-white text-2xl  hover:text-red-600' to="/about">About</NavLink></li>
                        <li><NavLink className='underline text-white text-2xl  hover:text-red-600' to="/product">Product</NavLink></li>
                        <li><NavLink className='underline text-white text-2xl  hover:text-red-600' to="/Contact">Contact</NavLink></li>
                       
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
