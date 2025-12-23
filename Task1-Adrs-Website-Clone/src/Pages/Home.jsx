import React from 'react'
import HomemainContent from '../Components/HomemainContent'
import Home2part from '../Components/Home2part'
import OurServices from '../Components/OurServices'
import FeaturedProducts from '../Components/FeaturedProducts'
import OurImpact from '../Components/OurImpact'
import StartYourJourney from '../Components/StartYourJourney'


const Home = () => {
  return (
    <div className='h-fit mt-24 lg:px-2 px-8 w-full flex flex-col bg-primaryBackdround'>
      
      <HomemainContent/>
      <Home2part/>
      <OurServices/>
      <FeaturedProducts/>
      <OurImpact/>
     <StartYourJourney/>
     
   
    </div>
    
  )
}

export default Home