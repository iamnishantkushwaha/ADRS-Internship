const Powerfulproducts = () => {
  return (
    <div className="h-9/12 w-full flex-col gap-14  md:px-20 flex mt-54 items-center justify-center bg-primaryBackdround">
      <div className="flex flex-col  px-6 md:flex-wrap ">
        <span className="flex flex-wrap md:gap-3 justify-center  ">
          <h1 className="font-bold  text-4xl lg:text-6xl text-center inline-block  text-white">
            Powerful
          </h1>
          <h1 className="font-bold text-4xl  lg:text-6xl inline-block   md:mr-0 mr-2 text-purple-700">
            Products
          </h1>
          <h1 className="font-bold text-4xl lg:text-6xl inline-block  text-white ">
            For Modern
          </h1>
           <h1 className="font-bold  text-4xl lg:text-6xl inline-block  text-white">
            Business
          </h1>
        </span>
        
         
        
      </div>
      <p className="text-2xl text-gray-400 text-center">
        Enterprise-grade solutions designed to transform your operations
      </p>
      <div className="flex w-full justify-center flex-wrap lg:flex-nowrap gap-5 items-center">
        <button className="px-23 py-4 md:px-8 bg-purple-500 rounded font-bold text-white">
          Start Free Trial
        </button>
        <button className="px-23  md:px-8 font-bold text-white py-4 border-purple-500 bg-transparent border-2 rounded-xl">
          Schedule Demo
        </button>
      </div>
    </div>
  );
};

export default Powerfulproducts;
