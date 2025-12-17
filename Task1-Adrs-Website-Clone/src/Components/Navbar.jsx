import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
    
  return (
    <div className='h-18 w-full px-45  flex items-center bg-transparent  justify-between fixed' >
        <div className='h-full w-30 flex items-center justify-center '>< img  src="https://www.adrstechno.com/logo-dark.png" alt="logo" /></div>
        <div className='h-full w-2/3  text-white'><ul className='h-full flex items-center justify-evenly'>
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
            <button  onClick={
                ()=>{
                  document.documentElement.classList.toggle("dark")
                  document.body.classList.toggle("dark")

                    
                    
                }
            } className='p-2 border-gray-800 rounded bg-primaryBackdround border-2'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" class="w-5 h-5 text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path></svg></button>
       
        </ul>
        </div>
       
    </div>
  )
}

export default Navbar