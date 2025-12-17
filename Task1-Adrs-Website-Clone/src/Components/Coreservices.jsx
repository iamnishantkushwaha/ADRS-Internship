import React from 'react'

const Coreservices = () => {
  return (
     <div className="flex  flex-col items-center justify-center h-screen bg-primaryBackdround">
        <div className="h-fit mb-10 w-fit flex flex-col items-center justify-content ">
      <div className="w-full h-fit flex items-center justify-center">
        <span className="flex gap-3"><h1 className="text-white  font-bold text-3xl">Core</h1>
        <h1 className="text-purple-400 font-bold text-3xl">Services</h1></span>
      </div>
      <p className="mt-3.5 text-xl text-center  text-gray-400 ">Comprehensive technology solutions for your business</p>
      </div>

      <div className=' h-3/4 grid  items-center justify-center mt-3 px-44 gap-8 w-full grid-cols-3  rounded '>
        <div className='bg-white/20 p-6 flex flex-col justify-center gap-5 h-5/6 w-92 rounded-xl hover:scale-105 hover:bg-blend-color-burn transition-all duration-1000' >
        <div><div className=' flex items-center justify-center bg-pink-500 rounded-xl  h-14 w-14'><svg stroke="white" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></div>
             </div><div ><h1 className='text-2xl font-bold text-white'>Web & Mobile</h1><h1 className='text-2xl font-bold text-white'>Development</h1></div>
         <p className='font-semibold text-gray-400'>Custom application development with modern technologies and best practices.</p>
         <div ><ul className='font-semibold text-gray-400'>
            <li className='flex items-center '><div className='h-2 w-2 mr-1 bg-purple-500 rounded-2xl'></div>Application Development</li>
            <li className='flex items-center'><div className='h-2 w-2 mr-1 bg-purple-500 rounded-2xl'></div>Tech Consultation</li>
            <li className='flex items-center'><div className='h-2 w-2 mr-1 bg-purple-500 rounded-2xl'></div>Cloud Architecture</li>
            <li className='flex items-center'><div className='h-2 w-2  mr-1 bg-purple-500 rounded-2xl'></div>Api Integration</li></ul>
            <button className='mt-4 flex items-center justify-center py-2  bg-transparent text-purple-500 font-semibold'>Learn More <svg  className=" flex items-center justify-center w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></button></div>
            
        </div>
    
        <div className='bg-white/20 p-6 flex flex-col justify-center gap-5 h-5/6 w-92 rounded-xl hover:scale-105   transition-all duration-1000' >
        <div><div className=' flex items-center justify-center bg-blue-500 rounded-xl  h-14 w-14'><svg stroke="white" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-5xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></div>
             </div><div ><h1 className='text-2xl font-bold text-white'>Security Consultation</h1></div>
         <p className='font-semibold text-gray-400'>Comprehensive security services to protect your digital assets and infrastructure.</p>
         <div ><ul className='font-semibold text-gray-400'>
            <li className='flex items-center '><div className='h-2 w-2 mr-1 bg-purple-500 rounded-2xl'></div>Security Audits
</li>
            <li className='flex items-center'><div className='h-2 w-2 mr-1 bg-purple-500 rounded-2xl'></div>Threat Management
</li>
            <li className='flex items-center'><div className='h-2 w-2 mr-1 bg-purple-500 rounded-2xl'></div>Malware Analysis

</li>
            <li className='flex items-center'><div className='h-2 w-2  mr-1 bg-purple-500 rounded-2xl'></div>Penetration Testing
</li></ul>
            <button className='mt-4 flex items-center justify-center py-2  bg-transparent text-purple-500 font-semibold'>Learn More <svg  className=" flex items-center justify-center w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></button></div>
            
        </div>
        <div className='bg-white/20 p-6 flex flex-col justify-center gap-5 h-5/6 w-92 rounded-xl hover:scale-105 hover:bg-blend-color-burn transition-all duration-1000' >
        <div><div className=' flex items-center justify-center bg-green-500 rounded-xl  h-14 w-14'><svg stroke="white" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-5xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M17 18h1"></path><path d="M12 18h1"></path><path d="M7 18h1"></path></svg></div>
             </div><div ><h1 className='text-2xl font-bold text-white'>Industrial Automation</h1></div>
         <p className='font-semibold text-gray-400'>Smart automation solutions for modern manufacturing and logistics operations.</p>
         <div ><ul className='font-semibold text-gray-400'>
            <li className='flex items-center '><div className='h-2 w-2 mr-1 bg-purple-500 rounded-2xl'></div>Warehouse Automation</li>
            <li className='flex items-center'><div className='h-2 w-2 mr-1 bg-purple-500 rounded-2xl'></div>Supply Chain Management
</li>
            <li className='flex items-center'><div className='h-2 w-2 mr-1 bg-purple-500 rounded-2xl'></div>Automated QA</li>
            <li className='flex items-center'><div className='h-2 w-2  mr-1 bg-purple-500 rounded-2xl'></div>IoT Integration</li></ul>
            <button className='mt-4 flex items-center justify-center py-2  bg-transparent text-purple-500 font-semibold'>Learn More <svg  className=" flex items-center justify-center w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></button></div>
            
        </div>
      </div>
      </div>
  )
}

export default Coreservices