import React from "react";

const UpcomingProducts = () => {
  return (
    <div className="min-h-screen w-full lg:mt-60  mt-30 mb-12 flex flex-col gap-12 items-center justify-center">
      <div className="h-fit  w-fit flex flex-col items-center justify-center ">
        <h1 className="text-white  font-bold text-2xl lg:text-3xl ">Upcoming Products</h1>

        <p className="mt-3.5 text-xl text-center  text-gray-400 ">
          Exciting new products coming soon — stay tuned and request early
          access.
        </p>
      </div>
      <div className="   lg:px-45 justify-center grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 md:gap-25 gap-5 ">
        <div className="bg-white/00 border-2 border-gray-900 h-70 w-65 rounded-xl flex flex-col justify-center gap-4 items-center">
         <div className="flex items-center justify-center">
            <img
              className="h-10 "
              src="https://www.adrstechno.com/upcoming/Testseries.png"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold  text-white">Test Series</h1>
            <p className="text-gray-500 text-center">
              A full-featured assessment and testing platform for training and
              certification.
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <button className="bg-purple-600 px-4 py-2   gap-3 text-white rounded">
              Notify
            </button>
            <button className="text-white font-bold">Learn More</button>
          </div> 

          
        </div>


         <div className="bg-white/00 border-2 border-gray-900 h-70 w-65 rounded-xl flex flex-col justify-center gap-4 items-center">
         <div className="flex items-center justify-center">
            <img
              className="h-10 "
              src="https://www.adrstechno.com/upcoming/Lms.png"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold  text-white">ADRS LMS</h1>
            <p className="text-gray-500 text-center">
             Learning management system for course delivery, tracking, and reporting.
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <button className="bg-purple-600 px-4 py-2   gap-3 text-white rounded">
              Notify
            </button>
            <button className="text-white font-bold">Learn More</button>
          </div> 

          
        </div>

         <div className="bg-white/00 border-2 border-gray-900 h-70 w-65 rounded-xl flex flex-col justify-center gap-4 items-center">
         <div className="flex items-center justify-center">
            <img
              className="h-10 "
              src="https://www.adrstechno.com/upcoming/spark.png"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-bold  text-white">Adrs Spark</h1>
            <p className="text-gray-500 text-center">
             Lightweight low-code automation platform to spark rapid integrations and workflows.
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <button className="bg-purple-600 px-4 py-2   gap-3 text-white rounded">
              Notify
            </button>
            <button className="text-white font-bold">Learn More</button>
          </div> 

          
        </div>


         <div className="bg-white/00 border-2 border-gray-900  h-70 w-65 rounded-xl flex flex-col justify-center gap-4 items-center">
         <div className="flex items-center  justify-center">
            <img
              className="h-10 "
              src="https://www.adrstechno.com/upcoming/Festyfi.png"
              alt=""
            />
          </div>
          <div className="flex  flex-col items-center justify-center">
            <h1 className="font-bold  text-white">Festyfi</h1>
            <p className="text-gray-500 text-center">
             Event management product for ticketing, schedules, and on-site check-in.
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <button className="bg-purple-600 px-4 py-2   gap-3 text-white rounded">
              Notify
            </button>
            <button className="text-white font-bold">Learn More</button>
          </div> 

          
        </div>

      </div>
    </div>
  );
};

export default UpcomingProducts;
