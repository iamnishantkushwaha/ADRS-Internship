import React from "react";

const FeaturedProducts = () => {
  return (
    <div className="bg-primaryBackdround min-h-screen mb-12 md:mb-0 flex flex-col items-center gap-15   w-full">
      <div className="h-40 flex flex-col gap-9">
        <span className=" flex flex-col lg:flex-row items-center  justify-center gap-4">
          <h1 className="text-white  font-bold text-4xl lg:text-5xl">Featured</h1>
          <h1 className="text-purple-400 font-bold text-4xl lg:text-5xl leading-1.5">Products</h1>
        </span>
        <p className="text-xl text-center  text-white ">
          Industry-ready digital products designed for speed, security &
          efficiency.
        </p>
      </div>
      <div className="grid  w-11/12 grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1  gap-10">
        <div className="p-7 h-60 border-2 flex flex-col gap-4  text-white rounded-xl bg-white/10 border-gray-800 hover:shadow-2xl shadow-purple-500 hover:text-purple-500">
          <div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="text-4xl text-purple-600 dark:text-purple-400"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path>
            </svg>
          </div>
          <h1 className="text-2xl font-bold">Test Series</h1>
          <p className=" text-gray-500">
            A full-featured assessment and testing platform for training and
            certification.
          </p>
        </div>
        <div className="p-7 h-60  border-2 flex flex-col gap-4 text-white rounded-xl bg-white/10 border-gray-800 hover:shadow-2xl shadow-purple-500 hover:text-purple-500">
          <div>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="text-4xl text-purple-600 dark:text-purple-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M176,207.24a119,119,0,0,0,16-7.73V240a8,8,0,0,1-16,0Zm11.76-88.43-56-29.87a8,8,0,0,0-7.52,14.12L171,128l17-9.06Zm64-29.87-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V130.67L171,128l-43,22.93L43.83,106l0,0L25,96,128,41.07,231,96l-18.78,10-.06,0L188,118.94a8,8,0,0,1,4,6.93v73.64a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12Z"></path></svg>
          </div>
          <h1 className="text-2xl font-bold">ADRS LMS</h1>
          <p className=" text-gray-500">
           Learning management system for course delivery, progress tracking, and reporting.
          </p>
        </div>
        <div className="p-7 h-60  flex flex-col gap-4 border-2 text-white rounded-xl bg-white/10 border-gray-800 hover:shadow-2xl shadow-purple-500 hover:text-purple-500">
          <div>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-4xl text-purple-600 dark:text-purple-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="m19 9 1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"></path></svg>
          </div>
          <h1 className="text-2xl font-bold">Adrs Spark</h1>
          <p className=" text-gray-500">
            Low-code automation platform that accelerates workflows and smart integrations.
          </p>
        </div>
        <div className="p-7 h-60  border-2 flex flex-col gap-4 text-white rounded-xl bg-white/10 border-gray-800 hover:shadow-2xl shadow-purple-500 hover:text-purple-500">
          <div>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-4xl text-purple-600 dark:text-purple-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path></svg>
          </div>
          <h1 className="text-2xl font-bold">GoEventify</h1>
          <p className=" text-gray-500">
            Event management suite for ticketing, scheduling, check-in, and real-time analytics.
          </p>
        </div>
      </div>
      <button className="flex  rounded-xl px-7  text-white font-bold items-center justify-center py-2 bg-purple-500 hover:bg-purple-600 ">Explore Products <img src="./public/icons8-arrow-50.png" alt=""  /></button>
    </div>
  );
};

export default FeaturedProducts;
