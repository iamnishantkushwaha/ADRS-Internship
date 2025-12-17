import React from 'react'
import { useNavigate } from 'react-router-dom'

const StartYourJourney = () => {
    const navigate=useNavigate()
  return (
   <div className=" h-screen  p-auto flex flex-col items-center  w-full">
      <div className="h-40 flex flex-col gap-3">
        <span className=" flex items-center justify-center gap-4">
          <h1 className="text-white   font-bold text-5xl">Start Your Journey</h1>
          
        </span>
        <p className="text-xl text-center  text-gray-400 ">
      Transform your business with scalable, secure, and modern digital solutions.
        </p>
      </div>
      
      <button className="flex   mb-20 rounded-xl px-7  text-white font-bold items-center justify-center py-2 bg-purple-500 hover:bg-purple-600 " onClick={()=>{
        navigate('/contact')
      }} >Contact Us Today<img src="./public/icons8-arrow-50.png" alt=""  /></button>
    </div>
  )
}

export default StartYourJourney