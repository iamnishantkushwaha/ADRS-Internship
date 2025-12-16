import React from 'react'

const OurImpact = () => {
  return (
     <div className=" h-screen flex flex-col items-center  w-full">
      <div className="h-40 flex flex-col gap-3">
        <span className=" flex items-center justify-center gap-4">
          <h1 className="text-white   font-bold text-5xl">Our</h1>
          <h1 className="text-purple-400 font-bold text-5xl">Impact</h1>
        </span>
        <p className="text-xl text-center  text-white ">
          Delivering measurable value through innovation.
        </p>
      </div>
      <div className="grid h-30 w-11/12 grid-cols-4 gap-10">
        <div className="p-7 border-2 flex flex-col items-center gap-4  text-white rounded-xl bg-white/10 border-gray-800 hover:shadow-2xl shadow-purple-500 hover:text-purple-500">
          
          <h1 className="text-4xl font-bold text-purple-500 ">117+</h1>
          <p className=" text-gray-500">
           Projects Completed
          </p>
        </div>
        <div className="p-7 border-2 flex flex-col gap-4 items-center text-white rounded-xl bg-white/10 border-gray-800 hover:shadow-2xl shadow-purple-500 hover:text-purple-500">
          
          <h1 className="text-4xl font-bold text-purple-500">50+</h1>
          <p className=" text-gray-500">
          Happy Clients
          </p>
        </div>
        <div className="p-7 flex flex-col gap-4 border-2 items-center text-white rounded-xl bg-white/10 border-gray-800 hover:shadow-2xl shadow-purple-500 hover:text-purple-500">
          
          <h1 className="text-4xl font-bold text-purple-500">10+</h1>
          <p className=" text-gray-500">
           Team Members
          </p>
        </div>
        <div className="p-7 border-2 flex flex-col gap-4 items-center text-white rounded-xl bg-white/10 border-gray-800 hover:shadow-2xl shadow-purple-500 hover:text-purple-500">
          
          <h1 className="text-4xl font-bold text-purple-500">2024</h1>
          <p className=" text-gray-500">
            Founded
          </p>
        </div>
      </div>
      <button className="flex  mt-17 rounded-xl px-7  text-white font-bold items-center justify-center py-2 bg-purple-500 hover:bg-purple-600 ">Explore Products <img src="./public/icons8-arrow-50.png" alt=""  /></button>
    </div>
  )
}

export default OurImpact