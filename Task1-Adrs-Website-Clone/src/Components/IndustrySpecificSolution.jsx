import React from "react";

const IndustrySpecificSolution = () => {
  return (
    <div className="flex flex-col h-auto  mb-20 gap-12">
      <div className="w-full flex  items-center  justify-center">
        <div className="h-fit w-fit flex flex-col mt-20  items-center justify-content ">
          <div className="w-full h-fit flex items-center justify-center">
            <span className="flex flex-col text-center gap-3">
              <h1 className="text-white  font-bold text-3xl">
                Industry-Specific{" "}
              </h1>
              <h1 className="text-purple-400 font-bold text-3xl leading-3 lg:leading-none">Solutions</h1>
            </span>
          </div>
          <p className="mt-3.5 text-xl text-center  text-gray-400 ">
            Tailored solutions for your industry's unique challenges
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 md:grid-rows-3 md:px-14 lg:grid-rows-2 grid-cols-1 grid-row-6 lg:px-45 p-3  md:p-5 gap-y-8 bg-primaryBackdround">
        <div className="bg-white/20  h-56 lg:w-75 w-full md:w-83 flex flex-col items-center justify-center gap-2.5 rounded-xl p-4">
          <div>
            <svg
              stroke="#c084fc"
              fill="#c084fc"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              class="text-5xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-792 72h752v120H136V232zm752 560H136V440h752v352zm-237-64h165c4.4 0 8-3.6 8-8v-72c0-4.4-3.6-8-8-8H651c-4.4 0-8 3.6-8 8v72c0 4.4 3.6 8 8 8z"></path>
            </svg>
          </div>
          <h1 className="text-white text-xl font-bold">Financial Services</h1>
          <p className="font-semibold text-center text-gray-400">
            Secure, compliant solutions for banking <br />
            and fintech
          </p>
        </div>

        <div className="bg-white/20  h-56 lg:w-75 w-full md:w-83 flex flex-col items-center justify-center gap-2.5 rounded-xl p-4">
          <div>
            <svg
              stroke="#c084fc"
              fill="#c084fc"
              stroke-width="0"
              viewBox="0 0 448 512"
              class="text-5xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M448 492v20H0v-20c0-6.627 5.373-12 12-12h20V120c0-13.255 10.745-24 24-24h88V24c0-13.255 10.745-24 24-24h112c13.255 0 24 10.745 24 24v72h88c13.255 0 24 10.745 24 24v360h20c6.627 0 12 5.373 12 12zM308 192h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12zm-168 64h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12zm104 128h-40c-6.627 0-12 5.373-12 12v84h64v-84c0-6.627-5.373-12-12-12zm64-96h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12zm-116 12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40zM182 96h26v26a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V96h26a6 6 0 0 0 6-6V70a6 6 0 0 0-6-6h-26V38a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v26h-26a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6z"></path>
            </svg>
          </div>
          <h1 className="text-white text-xl font-bold">Healthcare</h1>
          <p className="font-semibold text-center text-gray-400">
            HIPAA-compliant platforms for healthcare providers
          </p>
        </div>

        <div className="bg-white/20  lg:w-75 h-56 w-full md:w-83 flex flex-col items-center justify-center gap-2.5 rounded-xl p-4">
          <div>
            <svg
              stroke="#c084fc"
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
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </div>
          <h1 className="text-white text-xl font-bold">E-commerce</h1>
          <p className="font-semibold text-center text-gray-400">
            Scalable infrastructure for online retail
          </p>
        </div>

        <div className="bg-white/20  lg:w-75 h-56 md:w-83 w-full flex flex-col items-center justify-center gap-2.5 rounded-xl p-4">
          <div>
            <svg
              stroke="#c084fc"
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
              <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
              <path d="M17 18h1"></path>
              <path d="M12 18h1"></path>
              <path d="M7 18h1"></path>
            </svg>
          </div>
          <h1 className="text-white text-xl font-bold">Manufacturing</h1>
          <p className="font-semibold text-center text-gray-400">
            IoT-enabled solutions for smart factories
          </p>
        </div>

        <div className="bg-white/20 lg:w-75 h-56 w-full md:w-83 flex flex-col items-center justify-center gap-2.5 rounded-xl p-4">
          <div>
            <svg stroke="#c084fc" fill="#c084fc" stroke-width="0" viewBox="0 0 256 256" class="text-5xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path></svg>
          </div>
          <h1 className="text-white text-xl font-bold">Education</h1>
          <p className="font-semibold text-center text-gray-400">
            Learning management and student information systems
          </p>
        </div>

        <div className="bg-white/20  md:w-83 lg:w-75 h-56 w-full flex flex-col items-center justify-center gap-2.5 rounded-xl p-4">
          <div>
            <svg stroke="#c084fc" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-5xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
          </div>
          <h1 className="text-white text-xl font-bold">Logistics</h1>
          <p className="font-semibold text-center text-gray-400">
            Supply chain optimization and tracking
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndustrySpecificSolution;
