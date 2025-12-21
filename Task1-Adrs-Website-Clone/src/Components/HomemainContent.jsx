import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const HomemainContent = () => {
  const navigate=useNavigate()
  return (
    <div className="min-h-screen min-w-full  pt-8  flex lg:px-45 flex-col gap-4  ">
      <div className=" h-2/3 w-full flex  flex-col lg:flex-row  justify-between gap-10 ">
        <div className="h-full w-full flex-col  flex gap-8  ">
          <h4 className="border-2 rounded-3xl w-fit p-2 text-md  bg-purple-500/20 text-purple-300 font-medium border-purple-400/30  max-sm:text-sm max-sm:w-78">
            Trusted Technologies For Modern Enterprises
          </h4>
          <h1 className="text-3xl font-bold text-purple-400 lg:text-6xl">
            Advanced Digital Reliable Solutions
          </h1>
          <p className="text-white text-lg max-sm:w-79">
            ADRS delivers secure, scalable and intelligent cloud platforms that
            help enterprises automate, innovate and transform their digital
            ecosystem.
          </p>
          <div className=" w-full  h-15  flex  flex-wrap gap-4 items-center">
            <button onClick={()=>navigate('/contact')} className="   px-6 py-3 rounded-xl items-center justify-center gap-3 flex whitespace-nowrap bg-purple-500 text-white ">
              <span className="block">Book a Demo</span><FaArrowRightLong />
            
  
            </button>
            <button onClick={()=>navigate('/services')} className="rounded-xl px-6 py-3 bg-white/20  whitespace-nowrap  text-white">
              Our Services
            </button>
          </div>
        </div>
        <div className=" h-80 w-full rounded-xl border-2 p-6  md:h-2/5 flex lg:mt-0 items-center justify-center bg-white/10 border-gray-700 ">
          <img
            className="rounded-xl h-full w-full"
            src="https://images.pexels.com/photos/5475763/pexels-photo-5475763.jpeg"
            alt=" Enterprise Architecture"
          />

        </div>
      </div>
      <div className=" flex flex-wrap items-center pt-5 gap-2 lg:justify-between    lg:flex-nowrap pb-5 justify-evenly ">
        <div className="flex    items-center justify-center h-26 w-45  lg:w-60 border-2 bg-white/10 rounded-xl border-gray-500 flex-col">
          <h1 className="text-purple-400 text-3xl font-bold ">10+</h1>
          <p className="text-white">Experts Engineers</p>
        </div>
        <div className="flex   gap-1 items-center justify-center h-26 w-45 lg:w-60 border-2 bg-white/10 rounded-xl border-gray-500 flex-col">
          <h1 className="text-purple-400 text-3xl font-bold ">99.9%</h1>
          <p className="text-white">Service Reliability</p>
        </div>
        <div className="flex   gap-1 items-center justify-center h-26 w-45  lg:w-60  border-2 bg-white/10 rounded-xl border-gray-500 flex-col">
          <h1 className="text-purple-400 text-3xl font-bold ">
            50+
          </h1>
          <p className="text-white whitespace-nowrap">Enterprise Deployments</p>
        </div>
        <div className="flex   gap-1 items-center justify-center h-26 w-45  border-2 lg:w-60 bg-white/10 rounded-xl border-gray-500 flex-col">
          <h1 className="text-purple-400 text-3xl font-bold ">
            24/7
          </h1>
          <p className="text-white">Global Support</p>
        </div>
      </div>
    </div>
  );
};

export default HomemainContent;
