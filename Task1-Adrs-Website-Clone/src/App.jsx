import Home from './Pages/Home'
import Services from './Pages/Services'
import Products from './Pages/Products'
import Workshop from './Pages/Workshops'
import Career from './Pages/Career'
import Gallery from './Pages/Gallery'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'
import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


function App() {
  

  return (
    <div className="min-h-screen min-w-screen  nav-color bg-primaryBackdround flex justify-center ">
      <div className="h-full w-full  nav-color2">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
         <Route path='/products' element={<Products/>}/>
          <Route path='/workshop' element={<Workshop/>}/>
           <Route path='/career' element={<Career/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
             <Route path='/aboutus' element={<AboutUs/>}/>
              <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
      </div>
    </div>
  )
}

export default App
