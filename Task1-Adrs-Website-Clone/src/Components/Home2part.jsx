import React from "react";
 
const Home2part = () => {
  return (
    <div className="min-h-screen w-full bg-primaryBackdround ">
      <div className=" min-h-screen w-full  flex  flex-col items-center justify-center gap-4">
        <div className="flex gap-4 flex-wrap justify-center items-center lg:flex-nowrap" >
          <h1 className="text-white  font-bold text-4xl lg:text-5xl">About</h1>
          <h1 className="text-purple-400 font-bold text-4xl lg:text-5xl">ADRS </h1>
          <h1 className="text-purple-400 font-bold text-4xl w-full leading-2 text-center lg:text-5xl">Techno</h1>
        </div>
        <p className="text-xl px-3 mt-5 text-center text-white lg:w-2/3">
          Established in 2024, ADRS Techno Pvt. Ltd. delivers enterprise-grade 
          software,automation systems, and digital transformation solutionsb
          that empower businesses to grow in a modern digital ecosystem.
        </p>
        
      </div>
    </div>
  );
};

export default Home2part;
