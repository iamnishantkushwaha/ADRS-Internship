import React from 'react'

const DontSeeaperfectfit = () => {
  return (
    <div className=" min-h-screen justify-center flex flex-col items-center gap-15 md:gap-0 w-full">
      <div className="h-40 flex flex-col gap-6">
        <span className=" flex items-center justify-center gap-4">
          <h1 className="text-white   font-bold text-4xl  w-45 md:w-full text-center lg:text-4xl">Don't See a Perfect Fit?
</h1>
          
        </span>
        <p className="text-xl text-center w-50 lg:w-3xl text-gray-400 ">
We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.

        </p>
      </div>
      
      <button className="flex    rounded px-7 md:px-10 md:py-3 md:text-xl  text-white  py-2 bg-purple-500 hover:bg-purple-600 " onClick={()=>{
        navigate('/contact')
      }} >Send Your Resume</button>
    </div>
  )
}

export default DontSeeaperfectfit