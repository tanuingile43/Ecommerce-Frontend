import React from 'react'
import Home_Carousel from '../Components/Home_Carousel/Home_Carousel'
import Home_Products from '../Components/Products/Home_Products'
import '../Components/Products/Style.css'
const Home = () => {
  return (
    <div className='home_section'>
        <Home_Carousel />
        <Home_Products />
        {/* <Products_Carousel /> */}
    </div>
  )
}

export default Home