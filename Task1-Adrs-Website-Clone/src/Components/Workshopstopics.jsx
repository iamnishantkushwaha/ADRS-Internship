import React from "react";
import { CiClock2 } from "react-icons/ci";

const Workshopstopics = () => {
  return (
    <div className="flex flex-col h-auto  mb-20 gap-12">
      <div className="w-full flex  items-center  justify-center">
        <div className="h-fit w-fit flex flex-col mt-20  items-center justify-content ">
          <div className="w-full h-fit flex items-center justify-center">
            <span className="flex  text-center gap-3">
              <h1 className="text-white  font-bold text-4xl">Workshop</h1>
              <h1 className="text-purple-400 font-bold text-4xl leading-3 lg:leading-none">
                Topics
              </h1>
            </span>
          </div>
          <p className="mt-3.5 text-2xl text-center  text-gray-400 ">
            Comprehensive technology training programs
          </p>
         
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 md:grid-rows-3 md:px-14 lg:grid-rows-2 grid-cols-1 grid-row-6 lg:px-45 p-3  md:p-5 gap-y-8 bg-primaryBackdround">
        <div className="bg-white/20 hover:shadow-purple-400 hover:shadow-md hover:-translate-y-1.5 hover:transition-all duration-500 h-56 lg:w-90 w-full md:w-83 flex flex-col items-left justify-center gap-2.5 rounded-xl p-4">
          <div>
            <svg
              stroke="#ac70e8"
              fill="#ac70e8"
              stroke-width="0"
              viewBox="0 0 24 24"
              class="text-5xl text-purple-400"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"></path>
            </svg>
          </div>
          <h1 className="text-white text-xl font-bold">Financial Services</h1>
          <p className="font-semibold  text-gray-400">
            Secure, compliant solutions for banking <br />
            and fintech
          </p>
           <h5 className="flex items-center gap-2 text-purple-500"><CiClock2 color="#ac70e8" /> 3-5 days  </h5>
        </div>

        <div className="bg-white/20 hover:shadow-purple-400 hover:shadow-md hover:-translate-y-1.5 hover:transition-all duration-500 h-56 lg:w-90 w-full md:w-83 flex flex-col items-left  justify-center gap-2.5 rounded-xl p-4">
          <div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 640 512"
              class="text-5xl text-purple-400"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"></path>
            </svg>
          </div>
          <h1 className="text-white text-xl font-bold">Healthcare</h1>
          <p className="font-semibold  text-gray-400">
            HIPAA-compliant platforms for healthcare providers
          </p>
           <h5 className="flex items-center gap-2 text-purple-500"><CiClock2 color="#ac70e8" /> 3-5 days  </h5>
        </div>

        <div className="bg-white/20  hover:shadow-purple-400 hover:shadow-md hover:-translate-y-1.5 hover:transition-all duration-500lg:w-90 h-56 w-full md:w-83 flex flex-col items-left  justify-center gap-2.5 rounded-xl p-4">
          <div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              class="text-5xl text-purple-400"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path>
            </svg>
          </div>
          <h1 className="text-white text-xl font-bold">E-commerce</h1>
          <p className="font-semibold  text-gray-400">
            Scalable infrastructure for online retail
          </p>
           <h5 className="flex items-center gap-2 text-purple-500"><CiClock2 color="#ac70e8" /> 3-5 days  </h5>
        </div>

        <div className="bg-white/20 lg:w-90 hover:shadow-purple-400 hover:shadow-md hover:-translate-y-1.5 hover:transition-all duration-500 h-56 md:w-83 w-full flex flex-col items-left justify-center gap-2.5 rounded-xl p-4">
          <div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              class="text-5xl text-purple-400"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M14.69 2.21 4.33 11.49c-.64.58-.28 1.65.58 1.73L13 14l-4.85 6.76c-.22.31-.19.74.08 1.01.3.3.77.31 1.08.02l10.36-9.28c.64-.58.28-1.65-.58-1.73L11 10l4.85-6.76c.22-.31.19-.74-.08-1.01a.77.77 0 0 0-1.08-.02z"></path>
            </svg>
             
          </div>
          <h1 className="text-white text-xl font-bold">Manufacturing</h1>
          <p className="font-semibold text-gray-400">
            IoT-enabled solutions for smart factories
          </p>
          <h5 className="flex items-center gap-2 text-purple-500"><CiClock2 color="#ac70e8" /> 5 days  </h5>
        </div>

        <div className="bg-white/20  hover:shadow-purple-400 hover:shadow-md hover:-translate-y-1.5 hover:transition-all duration-500  lg:w-90 h-56 w-full md:w-83 flex flex-col items-left justify-center gap-2.5 rounded-xl p-4">
          <div>
           <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-5xl text-purple-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path></svg>
          </div>
          <h1 className="text-white text-xl font-bold">Education</h1>
          <p className="font-semibold  text-gray-400">
            Learning management and student information systems
          </p>
           <h5 className="flex items-center gap-2  text-purple-500"><CiClock2 color="#ac70e8" /> 5 days  </h5>
        </div>

       
      </div>
    </div>
  );
};

export default Workshopstopics;
