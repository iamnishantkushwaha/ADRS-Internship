import React from "react";

const FrequentlyAskedQuestion = () => {
  return (
    <div className="min-h-screen lg:px-45 px-10 w-full flex  flex-col gap-10">
      <div className="h-fit w-full flex  gap-5 flex-col mt-20  items-center justify-content ">
        <div className="w-full h-fit flex items-center  justify-center">
          <span className="flex flex-col md:flex-row text-center gap-3">
            <h1 className="text-white  font-bold text-4xl">Frequently Asked</h1>
            <h1 className=" font-bold text-4xl text-purple-500 leading-3 md:leading-none">Questions</h1>
          </span>
        </div>
        <p className="mt-3.5 text-xl text-center  text-gray-400 ">
          Everything you need to know
        </p>
      </div>
      <div className="h-full w-full lg:px-30 flex flex-col gap-6 mb-7 ">
        <div className="lg:h-30 h-fit h-30 p-4 border-2 rounded-xl bg-enterprisesolution border-gray-900">
          <h1 className="text-xl  font-bold text-white">
            What is included in the free trial?
          </h1>
          <p className="text-gray-600 mt-4 ">
            Our 14-day free trial includes full access to all features with no
            credit card required. You can test all functionality with up to 5
            users.
          </p>
        </div>

        <div className="lg:h-30 h-fit p-4 border-2 rounded-xl bg-enterprisesolution border-gray-900">
          <h1 className="text-xl  font-bold text-white">
           Can I switch between plans?

          </h1>
          <p className="text-gray-600 mt-4 ">
            Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated.


          </p>
        </div>

        <div className="lg:h-30 h-fit p-4 border-2 rounded-xl bg-enterprisesolution border-gray-900">
          <h1 className="text-xl  font-bold text-white">
           Do you offer custom enterprise solutions?

          </h1>
          <p className="text-gray-600 mt-4 ">
            Absolutely! We work with enterprise clients to create tailored solutions that meet specific requirements. Contact our sales team for details.


          </p>
        </div>

        <div className="lg:h-30 h-fit p-4 border-2 rounded-xl bg-enterprisesolution border-gray-900">
          <h1 className="text-xl  font-bold text-white">
           What kind of support do you provide?

          </h1>
          <p className="text-gray-600 mt-4 ">
            We offer email support for all plans, priority support for Professional plans, and 24/7 dedicated support for Enterprise customers.


          </p>
        </div>


        <div className="lg:h-30 h-fit  p-4 border-2 rounded-xl bg-enterprisesolution border-gray-900">
          <h1 className="text-xl  font-bold text-white">
            Is my data secure?

          </h1>
          <p className="text-gray-600 mt-4 ">
            Yes, we use bank-grade encryption, are SOC 2 and ISO 27001 certified, and comply with GDPR and other data protection regulations.


          </p>
        </div>


        
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestion;
