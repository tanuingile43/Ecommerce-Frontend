import React, { useEffect } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product_Carousel_Card from '../Cards/Product_Carousel_Card';
import { useDispatch, useSelector } from 'react-redux';
import { findProducts } from '../../../State/Products/Action';
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
  const dispatch = useDispatch()
  const { products } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(findProducts())
  }, [])

  return (
    <>
      <div className="heading">Product Carousel</div>
      <div className="carousel">
        <Carousel responsive={responsive} className='products_carousel_grid ' >
          {
            products.content?.map((item, index) => <Product_Carousel_Card product={item} key={index} />)
          }

        </Carousel>
      </div>
    </>
  )
}

export default Products_Carousel