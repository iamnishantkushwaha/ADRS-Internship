import React from 'react'
import EnterpriseSolutions from '../Components/EnterpriseSolutions'
import Coreservices from "../Components/Coreservices";
import AdditionalServices from '../Components/AdditionalServices'
import IndustrySpecificSolution from '../Components/IndustrySpecificSolution'
import ADRSisImportant from '../Components/ADRSisImportant'

const Services = () => {
  return (
    <div className=' min-h-screen w-full mb-0 bg-primaryBackdround'>
      <EnterpriseSolutions/>
      <Coreservices/>
      <AdditionalServices/>
      <IndustrySpecificSolution/>
      <ADRSisImportant/>
      
    </div>
  )
}

export default Services