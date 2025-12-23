import React from 'react'
import ADRSSPARK from '../Components/ADRSSPARK'
import Workshopstopics from '../Components/Workshopstopics'
import Workshopsformat from '../Components/Workshopsformat'
import WhyChooseAdrs from '../Components/WhyChooseAdrs'
const Workshops = () => {
  return (
    <div className='bg-primaryBackdround lg:px-2 px-8  flex flex-col products  h-auto w-full'>
      <ADRSSPARK/>
      <Workshopstopics/>
      <Workshopsformat/>
      <WhyChooseAdrs/>
    </div>
  )
}

export default Workshops