import React from "react";

const ApplicationProcess = () => {
  return (
    <div className="bg-primaryBackdround min-h-screen   flex flex-col lg:px-37 items-center gap-15   w-full">
      <div className="h-40 flex flex-col lg:gap-3 gap-9">
        <span className=" flex flex-col lg:flex-row items-center  justify-center gap-4">
          <h1 className="text-white  font-bold text-3xl lg:text-4xl">
            Application
          </h1>
          <h1 className="text-purple-400 font-bold text-3xl lg:text-4xl leading-1.5 lg:leading-none">
            Process
          </h1>
        </span>
        <p className="text-xl text-center  text-gray-400 ">
          Simple and transparent hiring process
        </p>
      </div>
      <div className="grid  w-11/12 grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1  gap-10">
        <div className="justify-center h-55  items-center border-2 flex flex-col text-center gap-1 w-3xs text-white rounded-xl bg-white/5 border-gray-800 hover:shadow-md shadow-purple-400 ">
          <div>
            <div class="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-purple-600 dark:text-purple-400">
                1
              </span>
            </div>{" "}
          </div>
          <h1 className="text-xl font-bold">Apply Online</h1>
          <p className=" text-gray-500 text-center">
            Submit your application through our portal
          </p>
        </div>
        <div className="justify-center h-55 border-2 flex items-center flex-col gap-1 w-3xs text-white rounded-xl bg-white/5 border-gray-800 hover:shadow-md shadow-purple-400 ">
          <div>
           <div class="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-purple-600 dark:text-purple-400">
                2
              </span>
            </div>
          </div>
          <h1 className="text-xl font-bold">Initial Screening</h1>
          <p className=" text-gray-500 text-center">Our team reviews your application</p>
        </div>
        <div className="justify-center h-55 border-2 flex flex-col items-center gap-1 w-3xs text-white rounded-xl bg-white/5 border-gray-800 hover:shadow-md shadow-purple-400 ">
          <div>
           <div class="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-purple-600 dark:text-purple-400">
                3
              </span>
            </div>
          </div>
          <h1 className="text-xl font-bold">Interview</h1>
          <p className=" text-gray-500 text-center">
            Technical and cultural fit assessment
          </p>
        </div>
        <div className="justify-center h-55 border-2 flex flex-col items-center gap-1 w-3xs text-white rounded-xl bg-white/5 border-gray-800 hover:shadow-md shadow-purple-400 ">
          <div>
           <div class="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-purple-600 dark:text-purple-400">
                4
              </span>
            </div>
          </div>
          <h1 className="text-xl font-bold">Offer</h1>
          <p className=" text-gray-500 text-center ">Welcome to the team!</p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationProcess;
