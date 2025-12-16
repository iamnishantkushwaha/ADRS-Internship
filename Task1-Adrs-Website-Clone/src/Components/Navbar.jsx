import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='h-18 w-full flex items-center justify-between ' >
        <div className='h-full w-30 flex items-center justify-center'>< img  src="https://www.adrstechno.com/logo-dark.png" alt="logo" /></div>
        <div className='h-full w-1/2 text-white'><ul className='h-full flex items-center justify-between'>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/services'>Services</NavLink>
            </li>
            <li>
                <NavLink to='/products'>Products</NavLink>
            </li>
            <li>
                <NavLink to='workshops'>Workshops</NavLink>
            </li>
            <li>
                <NavLink to='career'>Career</NavLink>
            </li>
            <li>
                <NavLink to='gallery'>Gallery</NavLink>
            </li>
            <li>
                <NavLink to='aboutus'>About Us</NavLink>
            </li>
            <li>
                <NavLink to='contact'>Contact</NavLink>
            </li>
        </ul></div>
        <div className='h-full  w-12 items-center flex justify-center'><div className='h-10 w-10 flex items-center justify-center border-2 rounded border-gray-400 bg-transparent'>🔆</div>
        </div>
    </div>
  )
}

export default Navbar