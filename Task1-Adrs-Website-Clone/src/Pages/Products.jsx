import React from 'react'
import Powerfulproducts from '../Components/Powerfulproducts'
import UpcomingProducts from '../Components/UpcomingProducts'
import FeaturedProductspage from '../Components/FeaturedProductspage'

const Products = () => {
  return (
    <div className='bg-primaryBackdround flex flex-col products items-center justify-center h-auto w-full'>
    <Powerfulproducts/>
    <UpcomingProducts/>
    <FeaturedProductspage/>
    </div>
  )
}

export default Products