import React from "react";
 
const Home2part = () => {
  return (
    <div className="h-screen w-full bg-primaryBackdround ">
      <div className="h-4/6 w-full  flex flex-col items-center justify-center gap-4">
        <div className="flex gap-4" >
          <h1 className="text-white  font-bold text-5xl">About</h1>
          <h1 className="text-purple-400 font-bold text-5xl">ADRS Techno</h1>
        </div>
        <p className="text-xl text-center  text-white ">
          Established in 2024, ADRS Techno Pvt. Ltd. delivers enterprise-grade 
          software,<br/> automation systems, and digital transformation solutionsb
          that empower<br /> businesses to grow in a modern digital ecosystem.
        </p>
        
      </div>
    </div>
  );
};

export default Home2part;
