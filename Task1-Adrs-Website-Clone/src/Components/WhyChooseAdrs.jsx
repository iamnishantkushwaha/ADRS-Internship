import React from "react";

const WhyChooseAdrs = () => {
  return (
    <div className="bg-primaryBackdround min-h-screen   flex flex-col lg:px-37 items-center gap-15   w-full">
      <div className="h-40 flex flex-col lg:gap-3 gap-9">
        <span className=" flex flex-col lg:flex-row items-center  justify-center gap-4">
          <h1 className="text-white  font-bold text-3xl lg:text-4xl">
            Why Choose
          </h1>
          <h1 className="text-purple-400 font-bold text-3xl lg:text-4xl leading-1.5 lg:leading-none">
            ADRS Spark?
          </h1>
        </span>
        <p className="text-xl text-center  text-gray-400 ">
          What makes our workshops special
        </p>
      </div>
      <div className="grid  w-11/12 grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1  gap-10">
        <div className="py-7 px-2 h-45 border-2 flex flex-col text-center gap-1 w-3xs text-white rounded-xl bg-white/5 border-gray-800 hover:shadow-md shadow-purple-400 ">
          <div >
           <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-4xl text-purple-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M13 8.57a1.43 1.43 0 1 0 0 2.86 1.43 1.43 0 0 0 0-2.86z"></path><path d="M13 3C9.25 3 6.2 5.94 6.02 9.64L4.1 12.2a.5.5 0 0 0 .4.8H6v3c0 1.1.9 2 2 2h1v3h7v-4.68A6.999 6.999 0 0 0 13 3zm3 7c0 .13-.01.26-.02.39l.83.66c.08.06.1.16.05.25l-.8 1.39c-.05.09-.16.12-.24.09l-.99-.4c-.21.16-.43.29-.67.39L14 13.83c-.01.1-.1.17-.2.17h-1.6c-.1 0-.18-.07-.2-.17l-.15-1.06c-.25-.1-.47-.23-.68-.39l-.99.4c-.09.03-.2 0-.25-.09l-.8-1.39a.19.19 0 0 1 .05-.25l.84-.66c-.01-.13-.02-.26-.02-.39s.02-.27.04-.39l-.85-.66c-.08-.06-.1-.16-.05-.26l.8-1.38c.05-.09.15-.12.24-.09l1 .4c.2-.15.43-.29.67-.39L12 6.17c.02-.1.1-.17.2-.17h1.6c.1 0 .18.07.2.17l.15 1.06c.24.1.46.23.67.39l1-.4c.09-.03.2 0 .24.09l.8 1.38a.2.2 0 0 1-.05.26l-.85.66c.03.12.04.25.04.39z"></path></svg>
          </div>
          <h1 className="text-xl font-bold">Hands-on Learning</h1>
          <p className=" text-gray-500">Practical, project-based approach</p>
        </div>
        <div className="py-7 px-2 h-45 border-2 flex flex-col gap-1 w-3xs text-white rounded-xl bg-white/5 border-gray-800 hover:shadow-md shadow-purple-400 ">
          <div>
           <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-4xl text-purple-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.61c0-1.18.68-2.26 1.76-2.73 1.17-.52 2.61-.91 4.24-.91zM4 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1.13 1.1c-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58A2.01 2.01 0 0 0 0 16.43V18h4.5v-1.61c0-.83.23-1.61.63-2.29zM20 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4 3.43c0-.81-.48-1.53-1.22-1.85A6.95 6.95 0 0 0 20 14c-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H24v-1.57zM12 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"></path></svg>
          </div>
          <h1 className="text-xl font-bold">Expert Instructors</h1>
          <p className=" text-gray-500">Learn from industry professionals</p>
        </div>
        <div className="py-7 px-2 h-45 border-2 flex flex-col gap-1 w-3xs text-white rounded-xl bg-white/5 border-gray-800 hover:shadow-md shadow-purple-400 ">
          <div>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-4xl text-purple-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"></path></svg>
          </div>
          <h1 className="text-xl font-bold">Certification</h1>
          <p className=" text-gray-500">Receive completion certificate</p>
        </div>
        <div className="py-7 px-2 h-45 border-2 flex flex-col gap-1 w-3xs text-white rounded-xl bg-white/5 border-gray-800 hover:shadow-md shadow-purple-400 ">
          <div>
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-4xl text-purple-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"></path></svg>          </div>
          <h1 className="text-xl font-bold">For Schools & Colleges</h1>
          <p className=" text-gray-500">
            Specially designed for educational institutions
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseAdrs;
