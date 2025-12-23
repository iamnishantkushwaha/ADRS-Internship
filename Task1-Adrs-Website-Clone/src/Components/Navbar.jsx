import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { IoMdMenu } from "react-icons/io";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoMdClose } from "react-icons/io";
gsap.registerPlugin(ScrollTrigger)
const Navbar = () => {
    
const [ismenuopen,Setismenuopen]=useState(false);

     
    useGSAP(()=>{
    const navanimation=gsap.timeline()

    navanimation.from(".nav-part1",{
        y:-30,
        opacity:0,
        duration:1
        
    })
    navanimation.from(".nav-part2 li",{
        y:-30,
        opacity:0,
        duration:0.1,
        
        
    })
    

    
  
    })
  return (
   <> <div className='h-18 w-full  flex px-8 lg:px-45 items-center bg-white/30  nav-full justify-between fixed ' >
        <div className=' h-full w-30  flex items-center justify-center nav-part1 '>< img src="https://www.adrstechno.com/logo-dark.png" alt="logo" /></div>
        <div 
        className="h-full w-2/3  text-white nav-part2 hidden lg:inline-block"><ul className="h-full flex  items-center justify-evenly">
            <li >
                <NavLink to='/'>Home</NavLink>
            </li>
            <li >
                <NavLink to='/services'>Services</NavLink>
            </li>
            <li >
                <NavLink to='/products'>Products</NavLink>
            </li>
            <li >
                <NavLink to='workshops'>Workshops</NavLink>
            </li>
            <li >
                <NavLink to='career'>Career</NavLink>
            </li>
            <li >
                <NavLink to='gallery'>Gallery</NavLink>
            </li>
            <li >
                <NavLink to='aboutus'>About Us</NavLink>
            </li>
            <li>
                <NavLink to='contact'>Contact</NavLink>
            </li>
            
              
        </ul>
         
        </div>
          <div className={`h-full w-4xs gap-6 flex items-center `}><button className={` p-3.5 border-2 ${ismenuopen?"absolute top-2.5 right-26":null} bg-primaryBackdround rounded border-gray-700 `}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" className="w-5 h-5 text-yellow-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"></path></svg></button>
        <button className={`bg-black p-1 rounded lg:hidden `} onClick={()=>{
          Setismenuopen(true)
        }}><IoMdMenu color="white" size="40" fontWeight="bold" />
</button></div>
       
    </div>
    <div className={`bg-black text-white  w-full h-fit  fixed top-18 p-4.5 ${!ismenuopen?"hidden ":null}`}> 
        <ul className={`h-full w-full text-2xl flex flex-col justify-evenly `}>
            <li className=' w-full p-1.5 hover:text-purple-400 '>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li className=' w-full p-1.5 hover:text-purple-400 '>
                <NavLink to='/services'>Services</NavLink>
            </li>
            <li className=' w-full p-1.5 hover:text-purple-400 '>
                <NavLink to='/products'>Products</NavLink>
            </li>
            <li className=' w-full p-1.5 hover:text-purple-400 '>
                <NavLink to='/workshops'>Workshops</NavLink>
            </li>
            <li className=' w-full p-1.5 hover:text-purple-400 '>
                <NavLink to='/career'>Career</NavLink>
            </li>
            <li className=' w-full p-1.5 hover:text-purple-400 '>
                <NavLink to='/gallery'>Gallery</NavLink>
            </li>
            <li  className=' w-full p-1.5 hover:text-purple-400 '>
                <NavLink to='/aboutus'>About Us</NavLink>
            </li>
            <li className=' w-full p-1.5 hover:text-purple-400 '>
                <NavLink to='/contact'>Contact</NavLink>
            </li>
            
              
        </ul>
        <div className={`absolute -top-15 right-8 ${!ismenuopen?"hidden":null}`}><button onClick={()=>Setismenuopen(false)}className={`bg-black p-1 rounded lg:hidden ${!ismenuopen?"hidden":null}`}><IoMdClose color="white" size="40" fontWeight="bold"/></button></div>
    </div>
    </>
  )
}

export default Navbar