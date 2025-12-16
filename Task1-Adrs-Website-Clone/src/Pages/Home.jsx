import React from 'react'
import HomemainContent from '../Components/HomemainContent'
import Home2part from '../Components/Home2part'
import OurServices from '../Components/OurServices'
import FeaturedProducts from '../Components/FeaturedProducts'

const Home = () => {
  return (
    <div className='h-auto w-full flex flex-col  bg-primaryBackdround'>
      
      <HomemainContent/>
      <Home2part/>
      <OurServices/>
      <FeaturedProducts/>
   
    </div>
    
  )
}

export default Home