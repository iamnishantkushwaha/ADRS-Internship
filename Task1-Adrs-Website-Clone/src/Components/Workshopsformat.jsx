import React from "react";
import { BsDot } from "react-icons/bs";

const Workshopsformat = () => {
  return (
    <div className="flex flex-col h-auto  mb-20 gap-12">
      <div className="w-full flex  items-center  justify-center">
        <div className="h-fit w-fit flex flex-col mt-20  items-center justify-content ">
          <div className="w-full h-fit flex items-center justify-center">
            <span className="flex  text-center gap-3">
              <h1 className="text-white  font-bold text-4xl">Workshop</h1>
              <h1 className="text-purple-400 font-bold text-4xl leading-3 lg:leading-none">
                Formats
              </h1>
            </span>
          </div>
          <p className="mt-3.5 text-2xl text-center  text-gray-400 ">
            Choose a format that suits your needs
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 md:grid-rows-1 md:px-14 lg:grid-rows-1 grid-cols-1 grid-row-6 lg:px-45 p-3  md:p-5 gap-y-8 bg-primaryBackdround">
        <div className="bg-white/5  text-white hover:shadow-purple-400 hover:shadow-md  h-70 lg:w-lg w-full md:w-83 flex flex-col items-left justify-center gap-2.5 rounded-xl p-8">
          <h1 className=" text-2xl font-bold text-purple-400">
            3-Day Workshop
          </h1>
          <div className="flex flex-col gap-4 mt-4">
            <h2 className="font-bold">Topics Covered:</h2>
            <ul className="text-md text-gray-400">
              <li className="flex items-center">
                <BsDot className="text-purple-500 font-bold" />
                Full-Stack Development
              </li>
              <li className="flex items-center">
                <BsDot className="text-purple-500 font-bold" />
                Python & AI Basics
              </li>
              <li className="flex items-center">
                <BsDot className="text-purple-500 font-bold" />
                Mobile App Development
              </li>
            </ul>
            <span className="flex items-center gap-1 text-gray-400">
              <h2 className="font-bold text-white ">Format: </h2>Intensive
              hands-on training
            </span>
            <span className="flex items-center gap-1 text-gray-400">
              <h2 className="font-bold text-white">Certifications: </h2>
              Certificate of Completion
            </span>
          </div>
        </div>

        <div className="bg-white/5 text-white hover:shadow-purple-400 hover:shadow-md  h-70 lg:w-lg w-full md:w-83 flex flex-col items-left justify-center gap-2.5 rounded-xl p-8">
          <h1 className=" text-2xl font-bold text-purple-400">
            5-Day Workshop
          </h1>
          <div className="flex flex-col gap-4 mt-4">
            <h2 className="font-bold">Topics Covered:</h2>
            <ul className="text-md text-gray-400">
              <li className="flex items-center">
                <BsDot className="text-purple-500 font-bold" />
                Advanced Full-Stack
              </li>
              <li className="flex items-center">
                <BsDot className="text-purple-500 font-bold" />
                Arduino & IoT
              </li>
              <li className="flex items-center">
                <BsDot className="text-purple-500 font-bold" />
                Cybersecurity Fundamentals
              </li>
            </ul>
            <span className="flex items-center gap-1 text-gray-400">
              <h2 className="font-bold text-white ">Format: </h2>Comprehensive
              project-based learning
            </span>
            <span className="flex items-center gap-1 text-gray-400">
              <h2 className="font-bold text-white">Certifications: </h2>Advanced
              Certificate
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshopsformat;
