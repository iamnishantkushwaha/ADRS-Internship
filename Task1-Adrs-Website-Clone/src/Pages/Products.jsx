import React from 'react'
import Powerfulproducts from '../Components/Powerfulproducts'
import UpcomingProducts from '../Components/UpcomingProducts'
import FeaturedProductspage from '../Components/FeaturedProductspage'
import Compareplans from '../Components/compareplans'
import FrequentlyAskedQuestion from '../Components/FrequentlyAskedQuestion'
import Readytogetstarted from '../Components/Readytogetstarted'

const Products = () => {
  return (
    <div className='bg-primaryBackdround lg:px-2 px-8  flex flex-col products items-center justify-center h-auto w-full'>
    <Powerfulproducts/>
    <UpcomingProducts/>
    <FeaturedProductspage/>
    <Compareplans/>
    <FrequentlyAskedQuestion/>
    <Readytogetstarted/>
    </div>
  )
}

export default Products