import React from "react";

const AdditionalServices = () => {
  return (
    <div className="flex flex-col h-auto justify-center items-center bg-primaryBackdround">
      <div className="w-full flex items-center  justify-center">
        <div className="h-fit w-fit flex flex-col mt-20  items-center justify-content ">
          <div className="w-full h-fit flex items-center justify-center">
            <span className="flex gap-3">
              <h1 className="text-white  font-bold text-3xl">Additional</h1>
              <h1 className="text-purple-400 font-bold text-3xl">Services</h1>
            </span>
          </div>
          <p className="mt-3.5 text-xl text-center  text-gray-400 ">
            Extended capabilities to meet all your technology needs
          </p>
        </div>
      </div>
      <div className="h-auto w-full mt-10 grid grid-cols-2 grid-rows-2 px-45 gap-4">
        <div className="h-110 w-140 p-10 bg-white/20  flex flex-col justify-center gap-5  rounded-xl hover:scale-105 hover:bg-blend-color-burn transition-all duration-1000 delay-150">
          <div>
            <div className="bg-blue-600 rounded-xl h-15 w-15 flex items-center justify-center">
              <svg
                stroke="white"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-5xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                <path d="M2 2l7.586 7.586"></path>
                <circle cx="11" cy="11" r="2"></circle>
              </svg>
            </div>
            
          </div>
          <h1 className="text-white text-xl font-bold">UI/UX Design</h1>
          <p className="font-semibold text-gray-400">
            User-centric design solutions that enhance engagement and
            <br />
            satisfaction.
          </p>
          <div>
            <ul className="font-semibold flex flex-col gap-2 text-gray-400">
              <li className="flex items-center ">
                <div className="h-2 w-2 mr-1 bg-purple-500 rounded-2xl"></div>
                User Research
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 mr-1 bg-purple-500 rounded-2xl"></div>
                Wireframing
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 mr-1 bg-purple-500 rounded-2xl"></div>
                Prototyping
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2  mr-1 bg-purple-500 rounded-2xl"></div>
                Design Systems
              </li>
            </ul>
            <button className="mt-4 flex items-center justify-center py-2  bg-transparent text-purple-500 font-semibold">
              Learn More{" "}
              <svg
                className=" flex items-center justify-center w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </button>
          </div>
        </div>



        <div className="h-110 w-140 p-10 bg-white/20  flex flex-col justify-center gap-5  rounded-xl hover:scale-105 hover:bg-blend-color-burn transition-all delay-150 duration-1000">
          <div>
            <div className="bg-blue-600 rounded-xl h-15 w-15 flex items-center justify-center">
              <svg stroke="white" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-5xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
            </div>
          </div>
          <h1 className="text-white text-xl font-bold">Mobile App Development</h1>
          <p className="font-semibold text-gray-400">
            Native and cross-platform mobile applications for iOS and Android.
            
          </p>
          <div>
            <ul className="font-semibold flex flex-col gap-2 text-gray-400">
              <li className="flex items-center ">
                <div className="h-2 w-2 mr-1 bg-purple-500 rounded-2xl"></div>
              React Native

              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 mr-1 bg-purple-500 rounded-2xl"></div>
               Flutter
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 mr-1 bg-purple-500 rounded-2xl"></div>
                Native iOS/Android

              </li>
              <li className="flex items-center">
                <div className="h-2 w-2  mr-1 bg-purple-500 rounded-2xl"></div>
                Design Systems
              </li>
            </ul>
            <button className="mt-4 flex items-center justify-center py-2  bg-transparent text-purple-500 font-semibold">
              Learn More
              <svg
                className=" flex items-center justify-center w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="h-110 w-140 p-10 bg-white/20  flex flex-col justify-center gap-5  rounded-xl hover:scale-105 hover:bg-blend-color-burn transition-all duration-1000 delay-150">
          <div>
            <div className="bg-green-600 rounded-xl h-15 w-15 flex items-center justify-center">
              <svg stroke="white" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-5xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
            </div>
          </div>
          <h1 className="text-white text-xl font-bold">Cloud Solutions</h1>
          <p className="font-semibold text-gray-400">
           Scalable cloud infrastructure and migration services.
            
          </p>
          <div>
            <ul className="font-semibold flex flex-col gap-2 text-gray-400">
              <li className="flex items-center ">
                <div className="h-2 w-2 mr-1 bg-purple-500 rounded-2xl"></div>
               AWS/Azure/GCP

              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 mr-1 bg-purple-500 rounded-2xl"></div>
               Cloud Migration

              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 mr-1 bg-purple-500 rounded-2xl"></div>
               DevOps
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2  mr-1 bg-purple-500 rounded-2xl"></div>
                Serverless Architecture

              </li>
            </ul>
            <button className="mt-4 flex items-center justify-center py-2  bg-transparent text-purple-500 font-semibold">
              Learn More{" "}
              <svg
                className=" flex items-center justify-center w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </button>
          </div>
        </div>

       

         <div className="h-110 w-140 p-10 bg-white/20  flex flex-col justify-center gap-5  rounded-xl hover:scale-105 hover:bg-blend-color-burn transition-all duration-1000 delay-150">
          <div>
            <div className="bg-pink-600 rounded-xl h-15 w-15 flex items-center justify-center">
<svg stroke="white" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-5xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>            </div>
          </div>
          <h1 className="text-white text-xl font-bold">AI & Machine Learning</h1>
          <p className="font-semibold text-gray-400">
           Intelligent solutions powered by artificial intelligence and ML.


            
          </p>
          <div>
            <ul className="font-semibold flex flex-col gap-2 text-gray-400">
              <li className="flex items-center ">
                <div className="h-2 w-2 mr-1 bg-purple-500 rounded-2xl"></div>
              Predictive Analytics


              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 mr-1 bg-purple-500 rounded-2xl"></div>
              Computer Vision


              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 mr-1 bg-purple-500 rounded-2xl"></div>
              NLP
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2  mr-1 bg-purple-500 rounded-2xl"></div>
              Chatbots

              </li>
            </ul>
            <button className="mt-4 flex items-center justify-center py-2  bg-transparent text-purple-500 font-semibold">
              Learn More{" "}
              <svg
                className=" flex items-center justify-center w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdditionalServices;
