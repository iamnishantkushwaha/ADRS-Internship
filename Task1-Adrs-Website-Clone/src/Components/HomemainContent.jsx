import React from "react";

const HomemainContent = () => {
  return (
    <div className="h-screen w-full pt-8 flex flex-col gap-4 ">
      <div className=" h-2/3 w-full flex justify-between ">
        <div className="h-full w-2/5 flex-col flex gap-8">
          <h4 className="border-2 rounded-3xl w-fit p-2 text-md bg-purple-500/20 text-purple-300 font-medium border-purple-400/30">
            Trusted Technologies For Modern Enterprises
          </h4>
          <h1 className="text-5xl font-bold text-purple-400">
            Advanced Digital Reliable Solutions
          </h1>
          <p className="text-white text-lg">
            ADRS delivers secure, scalable and intelligent cloud platforms that
            help enterprises automate, innovate and transform their digital
            ecosystem.
          </p>
          <div className=" w-full h-15  flex gap-6 items-center">
            <button className=" rounded-xl px-4 py-3  bg-purple-500 text-white flex">
              Book a Demo
              <img
                className="w-7 ml-3 "
                src="./public/icons8-arrow-50.png"
                alt=""
              />
            </button>
            <button className="rounded-xl px-4 py-3.5 bg-white/20   text-white">
              Our Services
            </button>
          </div>
        </div>
        <div className=" h-105 w-1/2 rounded-xl border-2 p-6 flex items-center justify-center bg-white/10 border-gray-700">
          <img
            className="rounded-xl h-full w-full"
            src="https://images.pexels.com/photos/5475763/pexels-photo-5475763.jpeg"
            alt=" Enterprise Architecture"
          />
        </div>
      </div>
      <div className=" flex items-center pt-5 justify-between">
        <div className="flex   gap-1 items-center justify-center h-26 w-62 border-2 bg-white/10 rounded-xl border-gray-500 flex-col">
          <h1 className="text-purple-400 text-3xl font-bold ">10+</h1>
          <p className="text-white">Experts Engineers</p>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center h-26 w-62 border-2 bg-white/10 rounded-xl border-gray-500">
          <h1 className="text-purple-400 text-3xl font-bold ">99.9%</h1>
          <p className="text-white">Service Reliability</p>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center h-26 w-62 border-2 bg-white/10 rounded-xl border-gray-500">
          <h1 className="text-purple-400 text-3xl font-bold ">
            50+
          </h1>
          <p className="text-white">Enterprise Deployments</p>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center h-26 w-62 border-2 bg-white/10 rounded-xl border-gray-500">
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
