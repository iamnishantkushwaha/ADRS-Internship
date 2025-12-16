import React from "react";

const OurServices = () => {
  return (
    <div className="bg-primaryBackdround h-screen w-full">
      <div className="h-40 flex flex-col gap-3">
        <span className=" flex items-center justify-center gap-4">
          <h1 className="text-white  font-bold text-5xl">OUR</h1>
          <h1 className="text-purple-400 font-bold text-5xl">SERVICES</h1>
        </span>
        <p className="text-xl text-center  text-white ">
          Cutting-edge solutions engineered for reliability and scalability.
        </p>
      </div>
      <div className="flex flex-col gap-10 mt-5 items-center justify-center">
        <div className="flex h-auto gap-14 justify-center">
          
          <div className="h-90 w-90 rounded-xl p-8 bg-white/10 flex flex-col gap-4  text-white hover:shadow-2xl shadow-purple-500 hover:text-purple-500">
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="text-5xl text-purple-600 dark:text-purple-400"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"></path>
              </svg>
            </div>
            <div className="text-2xl font-bold">
              Web & Mobile <br />
              Development
            </div>
            <div className="text-xl text-gray-500">
              Custom application development, technical consulting, UI/UX
              engineering, and cloud-ready architectures.
            </div>
          </div>
          <div className="h-90 w-90 rounded-xl p-8 bg-white/10 flex flex-col gap-4  text-white hover:shadow-2xl shadow-purple-500 hover:text-purple-500">
            <div>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-5xl text-purple-600 dark:text-purple-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path></svg>
            </div>
            <div className="text-2xl font-bold">
              Security Consultation
            </div>
            <div className="text-xl text-gray-500">
             Advanced penetration testing, vulnerability analysis, threat detection, and enterprise-grade security solutions.
            </div>
          </div>
          <div className="h-90 w-90 rounded-xl p-8 bg-white/10 flex flex-col gap-3  text-white hover:shadow-2xl shadow-purple-500 hover:text-purple-500">
            <div>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-5xl text-purple-600 dark:text-purple-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M22 10v12H2V10l7-3v2l5-2v3h8zm-4.8-1.5L18 2h3l.8 6.5h-4.6zM11 18h2v-4h-2v4zm-4 0h2v-4H7v4zm10-4h-2v4h2v-4z"></path></svg>
            </div>
            <div className="text-2xl font-bold">
              Industrial Automation
            </div>
            <div className="text-xl text-gray-500">
             Automation-driven systems for warehousing, supply chain, robotics, and smart manufacturing.
            </div>
          </div>
          
        </div>
        <button  className="flex rounded-xl px-5  text-white font-bold items-center justify-center py-2 bg-purple-500 hover:bg-purple-600 ">View All Services <img className ="ml-2.5" src="./public/icons8-arrow-50.png" alt="" /></button>
      </div>
    </div>
  );
};

export default OurServices;
