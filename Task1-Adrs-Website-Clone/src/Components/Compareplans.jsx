import React from 'react'

const compareplans = () => {
  return (
    <div className='min-h-screen w-full flex flex-col items-center md:px-15 lg:px-45 px-10 justify-center gap-20 '>
       <div className="h-fit w-full flex md:px-45 flex-col mt-20  items-center justify-content ">
          <div className="w-full h-fit flex items-center justify-center">
            <span className="flex text-center gap-3">
              <h1 className="text-white  font-bold text-4xl">
                Compare
              </h1>
              <h1 className=' font-bold text-4xl text-purple-500'>Plans</h1>
              
            </span>
          </div>
          <p className="mt-3.5 text-xl md:text-center  text-gray-400 ">
            Choose the right plan for your needs

          </p>
        </div>
       
    
   
        <table className='md:mx-45 text-small w-full lg:text-base mb-10 text-white font-bold'>
            <thead className='bg-purple-600  text-white font-bold'>
                <tr className='h-13   '><th className='w-2/5 text-left p-4 rounded-tl-2xl'>Features</th>
                <th >Starter</th>
                <th>Professional</th>
                <th className='rounded-tr-2xl'>Enterprise</th></tr>
            </thead>
            <tbody>
                <tr  className='h-13    '>
                    <td className='w-2/5 p-4'>Real-time Analytics</td>
                    <td ><svg class="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg></td>
                    <td><svg class="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg></td>
                    <td><svg class="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg></td>
                </tr>
                <tr  className='h-13  '>
                    <td className='w-2/5 p-4'>API Access</td>
                    <td><svg class="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg></td>
                    <td><svg class="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg></td>
                    <td><svg class="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg></td>
                </tr>
                <tr  className='h-13 '>
                    <td className='w-2/5 p-4'>Custom Integrations</td>
                    <td  className='text-center'>-</td>
                    <td><svg class="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg></td>
                    <td><svg class="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg></td>
                </tr>
                <tr  className='h-13  '>
                    <td className='w-2/5 p-4 '>Priority Support</td>
                    <td  className='text-center'>-</td>
                    <td><svg class="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg></td>
                    <td><svg class="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg></td>
                </tr>
                <tr  className='h-13   '>
                    <td className='w-2/5 p-4'>SLA Guarantee</td>
                    <td  className='text-center'>-</td>
                    <td  className='text-center'>-</td>
                    <td><svg class="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg></td>
                </tr>
                <tr  className='h-13 border-2 border-t-0 border-r-gray-900  border-b-gray-900 border-l-gray-900 '>
                    <td className='w-2/5 p-4 border-bl-2xl'>White-label Options</td>
                    <td className='text-center'>-</td>
                    <td  className='text-center'>-</td>
                    <td  className='text-center border-br-3xl'><svg class="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg></td>
                </tr>
            </tbody>
        </table>
   
               
           
           
        
    </div>
  )
}

export default compareplans