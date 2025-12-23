import React from "react";
import { BsSuitcaseLg } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { BsDot } from "react-icons/bs";
const Currentopening = () => {
  return (
    <div className="min-h-screen lg:px-45 mb-20 px-10 w-full flex  flex-col gap-10">
      <div className="h-fit w-full flex flex-col mt-20  items-center justify-content ">
        <div className="w-full h-fit flex items-center  justify-center">
          <span className="flex flex-col md:flex-row text-center gap-3">
            <h1 className="text-white  font-bold text-5xl">Current</h1>
            <h1 className=" font-bold text-5xl text-purple-500 leading-3 md:leading-none">
              Openings
            </h1>
          </span>
        </div>
        <p className="mt-3.5 text-xl text-center  text-gray-400 ">
          Explore opportunities to grow your career with us
        </p>
      </div>
      <div className="h-full w-full  flex flex-col gap-6 mb-7 ">
        <div className="flex h-fit p-8 border-2 bg-white/5 justify-between rounded-2xl">
             <div className="flex flex-col gap-3  ">
          <h1 className="text-3xl  font-bold text-white">React js Developer</h1>
          <div className="text-white flex gap-3">
            <span className="flex items-center text-sm gap-0.5">
              <CiLocationOn className="text-purple-400 font-bold" />{" "}
              Remote/Hybrid
            </span>
            <span className="flex gap-0.5 items-center text-sm">
              <BsSuitcaseLg className="font-bold text-purple-400" /> Full Time
            </span>
            <span className="flex  gap-0.5 items-center text-sm">
              <CiClock2 className="font-bold text-purple-400" /> 2-4 years
            </span>
          </div>
          <p className="text-gray-600 text-md  ">
            Build modern, responsive web applications using React.js and related
            technologies.
          </p>
          <div className="text-white flex flex-col gap-2">
            <h2 className="font-bold">Requirements:</h2>
            <ul className="text-sm text-gray-400">
              <li className="flex items-center">
                <BsDot className="text-purple-500 font-bold" />
                Strong proficiency in React.js and JavaScript
              </li>
              <li className="flex items-center">
                <BsDot className="text-purple-500 font-bold" />
                Experience with state management (Redux, Context API)
              </li>
              <li className="flex items-center">
                <BsDot className="text-purple-500 font-bold" />
                Knowledge of modern CSS frameworks
              </li>
              <li className="flex items-center">
                <BsDot className="text-purple-500 font-bold" />
                Understanding of RESTful APIs
              </li>
            </ul>
          </div>
        </div>
        <div><button className="px-20 py-4 rounded-xl text-white font-bold bg-purple-600">Apply Now</button></div>
        </div>
       



        <div className="flex h-fit p-8 border-2 bg-white/5 justify-between rounded-2xl">
             <div className="flex flex-col gap-3  ">
          <h1 className="text-3xl  font-bold text-white">Node.js Backend Developer
</h1>
          <div className="text-white flex gap-3">
            <span className="flex items-center text-sm gap-0.5">
              <CiLocationOn className="text-purple-400 font-bold" />{" "}
              Remote/Hybrid
            </span>
            <span className="flex gap-0.5 items-center text-sm">
              <BsSuitcaseLg className="font-bold text-purple-400" /> Full Time
            </span>
            <span className="flex  gap-0.5 items-center text-sm">
              <CiClock2 className="font-bold text-purple-400" /> 3-5 years
            </span>
          </div>
          <p className="text-gray-600 text-md  ">
          Design and develop scalable backend services and APIs using Node.js.


          </p>
          <div className="text-white flex flex-col gap-2">
            <h2 className="font-bold">Requirements:</h2>
            <ul className="text-sm text-gray-400">
              <li className="flex items-center">
                <BsDot className="text-purple-500 font-bold" />
               Strong experience with Node.js and Express

              </li>
              <li className="flex items-center">
                <BsDot className="text-purple-500 font-bold" />
               Database design (MongoDB, PostgreSQL)

              </li>
              <li className="flex items-center">
                <BsDot className="text-purple-500 font-bold" />
               RESTful API development

              </li>
              <li className="flex items-center">
                <BsDot className="text-purple-500 font-bold" />
              Understanding of microservices architecture

              </li>
            </ul>
          </div>
        </div>
        <div><button className="px-20 py-4 rounded-xl text-white font-bold bg-purple-600">Apply Now</button></div>
        </div>





         <div className="flex h-fit p-8 border-2 bg-white/5 justify-between rounded-2xl">
             <div className="flex flex-col gap-3  ">
          <h1 className="text-3xl  font-bold text-white">UI/UX Designer
</h1>
          <div className="text-white flex gap-3">
            <span className="flex items-center text-sm gap-0.5">
              <CiLocationOn className="text-purple-400 font-bold" />{" "}
              Remote/Hybrid
            </span>
            <span className="flex gap-0.5 items-center text-sm">
              <BsSuitcaseLg className="font-bold text-purple-400" /> Full Time
            </span>
            <span className="flex  gap-0.5 items-center text-sm">
              <CiClock2 className="font-bold text-purple-400" /> 2-3 years
            </span>
          </div>
          <p className="text-gray-600 text-md  ">
            Create beautiful, user-friendly interfaces and exceptional user experiences.


          </p>
          <div className="text-white flex flex-col gap-2">
            <h2 className="font-bold">Requirements:</h2>
            <ul className="text-sm text-gray-400">
              <li className="flex items-center">
                <BsDot className="text-purple-500 font-bold" />
               Proficiency in Figma, Adobe XD, or Sketch

              </li>
              <li className="flex items-center">
                <BsDot className="text-purple-500 font-bold" />
                Strong portfolio demonstrating UI/UX work

              </li>
              <li className="flex items-center">
                <BsDot className="text-purple-500 font-bold" />
                Understanding of design systems

              </li>
              <li className="flex items-center">
                <BsDot className="text-purple-500 font-bold" />
                Knowledge of responsive design principles

              </li>
            </ul>
          </div>
        </div>
        <div><button className="px-20 py-4 rounded-xl text-white font-bold bg-purple-600">Apply Now</button></div>
        </div>




         <div className="flex h-fit p-8 border-2 bg-white/5 justify-between rounded-2xl">
             <div className="flex flex-col gap-3  ">
          <h1 className="text-3xl  font-bold text-white">Digital Marketing Executive
</h1>
          <div className="text-white flex gap-3">
            <span className="flex items-center text-sm gap-0.5">
              <CiLocationOn className="text-purple-400 font-bold" />{" "}
              Remote/Hybrid
            </span>
            <span className="flex gap-0.5 items-center text-sm">
              <BsSuitcaseLg className="font-bold text-purple-400" /> Full Time
            </span>
            <span className="flex  gap-0.5 items-center text-sm">
              <CiClock2 className="font-bold text-purple-400" /> 1-3 years
            </span>
          </div>
          <p className="text-gray-600 text-md  ">
            Drive digital marketing campaigns and grow our online presence.


          </p>
          <div className="text-white flex flex-col gap-2">
            <h2 className="font-bold">Requirements:</h2>
            <ul className="text-sm text-gray-400">
              <li className="flex items-center">
                <BsDot className="text-purple-500 font-bold" />
                Experience with SEO, SEM, and social media marketing

              </li>
              <li className="flex items-center">
                <BsDot className="text-purple-500 font-bold" />
                Content creation and copywriting skills

              </li>
              <li className="flex items-center">
                <BsDot className="text-purple-500 font-bold" />
               Analytics and reporting (Google Analytics)

              </li>
              <li className="flex items-center">
                <BsDot className="text-purple-500 font-bold" />
                Email marketing campaign management

              </li>
            </ul>
          </div>
        </div>
        <div><button className="px-20 py-4 rounded-xl text-white font-bold bg-purple-600">Apply Now</button></div>
        </div>




         




         



      </div>
    </div>
  );
};

export default Currentopening;
