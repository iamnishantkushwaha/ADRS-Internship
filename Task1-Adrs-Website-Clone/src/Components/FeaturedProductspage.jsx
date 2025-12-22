import React from "react";

const FeaturedProductspage = () => {
  return (
    <div className="min-h-screen  flex min-w-screen md:flex-row flex-col md:px-45 ">
      <div className="h-full flex flex-col md:w-4xl w-90 p-1">
        <div className="h-18  ">
          <h1 className="font-bold text-3xl text-white">Featured Products</h1>
          <p className=" text-l text-wrap w-80 text-gray-400 ">
            Explore our flagship solutions — click a card to learn more or start
            a trial.
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 md:grid-rows-2  md:px-6 md:py-10 w-full gap-19 p-7 rounded-xl border-2">
          <div className=" h-fit md:w-full rounded-3xl bg-white/20 ">
            <div className="w-full h-30 bg-featuredproductsicon1 flex rounded-t-3xl justify-center items-center ">
              <span className="text-5xl">🏥</span>
            </div>
            <div className="h-full w-full p-4 flex flex-col gap-3">
              <div className="flex items-center justify-between h-11 mx-6">
                <h1 className="font-bold text-white text-2xl">IDHPS</h1>
                <div className="text-sm  w-fit h-fit px-2 text-cyan-400 border-b-cyan-300 border-2 bg-cyan-600 py-0.5 rounded-2xl text-center">
                  Healthcare
                </div>
              </div>
              <p className=" text-l  text-gray-400 ">
                Comprehensive healthcare solution for modern medical facilities
                with appointment management, telemedicine, and electronic health
                records.
              </p>
              <div>
                <h2 className="text-white font-bold ">Key Features:</h2>
                <ul className="text-white">
                  <li className="flex mt-1 ">
                    <svg
                      class="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flexshrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Appointment Scheduling
                  </li>
                  <li className="flex mt-1">
                    <svg
                      class="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flexshrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    elemedicine Integration
                  </li>
                  <li className="flex mt-1">
                    <svg
                      class="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flexshrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Electronic Health Records (EHR)
                  </li>
                  <li className="flex mt-1">
                    <svg
                      class="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flexshrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Patient Portal
                  </li>
                  <li className="flex mt-1">
                    <svg
                      class="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flexshrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Billing & Insurance
                  </li>
                </ul>
                <div className="flex mt-3.5 mb-3.5 h-10  w-full items-center justify-between">
                  <button className="text-white bg-cyan-500 md:px-10 md:py-3 px-7 py-3.5 text-sm md:text-md rounded-xl ">
                    Try Demo
                  </button>
                  <button className=" border-2 text-cyan-500 border-cyan-500 md:px-10 md:py-3 px-7 py-3.5 text-sm md:text-md rounded-xl">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className=" h-fit md:w-full rounded-3xl bg-white/20 ">
            <div className="w-full h-30 bg-purple-500 featuredproductsicon1 flex rounded-t-3xl justify-center items-center ">
              <span className="text-5xl">💎</span>
            </div>
            <div className="h-full w-full p-4 flex flex-col gap-3">
              <div className="flex items-center justify-between h-11 mx-6">
                <h1 className="font-bold text-white text-2xl">
                  Jewelry Manager
                </h1>
                <div className="text-sm  w-fit h-fit px-2 text-cyan-400 border-b-cyan-300 border-2 bg-cyan-600 py-0.5 rounded-2xl text-center">
                  Retail
                </div>
              </div>
              <p className=" text-l  text-gray-400 ">
                Complete retail management solution designed specifically for
                jewelry businesses with inventory, billing, and CRM
                capabilities.
              </p>
              <div>
                <h2 className="text-white font-bold ">Key Features:</h2>
                <ul className="text-white">
                  <li className="flex mt-1 ">
                    <svg
                      class="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flexshrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Inventory Management
                  </li>
                  <li className="flex mt-1">
                    <svg
                      class="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flexshrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Point of Sale (POS)
                  </li>
                  <li className="flex mt-1">
                    <svg
                      class="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flexshrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Customer Relationship Management
                  </li>
                  <li className="flex mt-1">
                    <svg
                      class="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flexshrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Billing & Invoicing
                  </li>
                  <li className="flex mt-1">
                    <svg
                      class="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flexshrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Analytics & Reports
                  </li>
                </ul>
                <div className="flex mt-3.5 mb-3.5 h-10  w-full items-center justify-between">
                  <button className="text-white bg-cyan-500 md:px-10 md:py-3 px-7 py-3.5 text-sm md:text-md rounded-xl">
                    Try Demo
                  </button>
                  <button className=" border-2 text-cyan-500 border-cyan-500 md:px-10 md:py-3 px-7 py-3.5 text-sm md:text-md rounded-xl">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className=" h-fit w-full rounded-3xl bg-white/20 ">
            <div className="w-full h-30 bg-green-500 featuredproductsicon1 flex rounded-t-3xl justify-center items-center ">
              <span className="text-5xl">🎓</span>
            </div>
            <div className="h-full w-full p-4 flex flex-col gap-3">
              <div className="flex items-center justify-between h-11 mx-6">
                <h1 className="font-bold text-white text-2xl">
                  ADRS Learn Pro
                </h1>
                <div className="text-sm  w-fit h-fit px-2 text-cyan-400 border-b-cyan-300 border-2 bg-cyan-600 py-0.5 rounded-2xl text-center">
                  Education
                </div>
              </div>
              <p className=" text-l  text-gray-400 ">
                Advanced learning management system with progress tracking,
                analytics, and interactive course delivery.
              </p>
              <div>
                <h2 className="text-white font-bold ">Key Features:</h2>
                <ul className="text-white">
                  <li className="flex mt-1 ">
                    <svg
                      class="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flexshrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Course Management
                  </li>
                  <li className="flex mt-1">
                    <svg
                      class="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flexshrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Progress Tracking
                  </li>
                  <li className="flex mt-1">
                    <svg
                      class="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flexshrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Analytics Dashboard
                  </li>
                  <li className="flex mt-1">
                    <svg
                      class="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flexshrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Interactive Assessments
                  </li>
                  <li className="flex mt-1">
                    <svg
                      class="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flexshrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Student Portal
                  </li>
                </ul>
                <div className="flex mt-3.5 mb-3.5 h-10  w-full items-center justify-between">
                  <button className="text-white bg-cyan-500 md:px-10 md:py-3 px-7 py-3.5 text-sm md:text-md rounded-xl">
                    Try Demo
                  </button>
                  <button className="border-2 text-cyan-500 border-cyan-500 md:px-10 md:py-3 px-7 py-3.5 text-sm md:text-md rounded-xl">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className=" h-fit w-full rounded-3xl bg-white/20 ">
            <div className="w-full h-30 bg-blue-600 featuredproductsicon1 flex rounded-t-3xl justify-center items-center ">
              <span className="text-5xl">🏢</span>
            </div>
            <div className="h-full w-full p-4 flex flex-col gap-3">
              <div className="flex items-center justify-between h-11 mx-6">
                <h1 className="font-bold text-white text-2xl">Custom ERP</h1>
                <div className="text-sm  w-fit h-fit px-2 text-cyan-400 border-b-cyan-300 border-2 bg-cyan-600 py-0.5 rounded-2xl text-center">
                  Enterprise
                </div>
              </div>
              <p className=" text-l  text-gray-400 ">
                Tailored enterprise resource planning solution with workflow
                automation, comprehensive reporting, and seamless integration.
              </p>
              <div>
                <h2 className="text-white font-bold ">Key Features:</h2>
                <ul className="text-white">
                  <li className="flex mt-1 ">
                    <svg
                      class="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flexshrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Workflow Automation
                  </li>
                  <li className="flex mt-1">
                    <svg
                      class="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flexshrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Custom Reports
                  </li>
                  <li className="flex mt-1">
                    <svg
                      class="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flexshrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Third-party Integration
                  </li>
                  <li className="flex mt-1">
                    <svg
                      class="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flexshrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Multi-department Management
                  </li>
                  <li className="flex mt-1">
                    <svg
                      class="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flexshrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Real-time Analytics
                  </li>
                </ul>
                <div className="flex mt-3.5 mb-3.5 h-10  w-full items-center justify-between">
                  <button className="text-white bg-cyan-500 md:px-10 md:py-3 px-7 py-3.5 text-sm md:text-md rounded-xl">
                    Try Demo
                  </button>
                  <button className="border-2 text-cyan-500 border-cyan-500 md:px-10 md:py-3 px-7 py-3.5 text-sm md:text-md rounded-xl">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-fit rounded-2xl  w-80 bg-enterprisesolution  p-4">
        <div className="h-65 p-5 flex flex-col gap-3 "><h1 className="text-white text-xl font-bold">Why ADRS Products</h1>
        <p className="text-gray-500">Built for scale, security and deep integrations. Pick a product and start a free trial.

</p>
        <div className="w-full flex flex-col gap-2.5"><button className="px-auto bg-purple-600 text-white font-bold py-2 rounded-xl ">Start Free Trial</button><button className="px-auto border-2 border-purple-600 hover:bg-purple-600 text-white font-bold py-2 rounded-xl ">Schedule Demo</button></div></div>
      </div>
    </div>
  );
};

export default FeaturedProductspage;
