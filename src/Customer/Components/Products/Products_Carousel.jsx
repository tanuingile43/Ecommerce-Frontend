import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product_Carousel_Card from '../Cards/Product_Carousel_Card';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

const Products_Carousel = () => {
  return (
  <>
  <div className="heading">Product Carousel</div>
   <div className="carousel">
   <Carousel responsive={responsive} className='products_carousel_grid ' >
          {
            [1,1,1,1,1,1,1,1,1,1,1,1,1].map((item,index) => <Product_Carousel_Card />)
          }
     </Carousel>
   </div>
  </>
  )
}

export default Products_Carousel