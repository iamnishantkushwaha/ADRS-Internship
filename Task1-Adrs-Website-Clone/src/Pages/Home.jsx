import React from 'react'
import HomemainContent from '../Components/HomemainContent'
import Home2part from '../Components/Home2part'
import OurServices from '../Components/OurServices'
import FeaturedProducts from '../Components/FeaturedProducts'
import OurImpact from '../Components/OurImpact'

const Home = () => {
  return (
    <div className='h-auto w-full flex flex-col  bg-primaryBackdround'>
      
      <HomemainContent/>
      <Home2part/>
      <OurServices/>
      <FeaturedProducts/>
      <OurImpact/>
   
    </div>
    
  )
}

export default Home