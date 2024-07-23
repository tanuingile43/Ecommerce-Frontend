import React from 'react'
import Product_Card from '../Cards/Product_Card'

const Home_Products = () => {
  return (
    <div className='products_grid p-5'>
      {
        [1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,1,1].map((item,index)=> <Product_Card />)
      }
    </div>
  )
}

export default Home_Products