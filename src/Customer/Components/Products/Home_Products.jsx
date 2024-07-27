import React, { useEffect } from 'react'
import Product_Card from '../Cards/Product_Card'
import { useDispatch, useSelector } from 'react-redux'
import { findProducts } from '../../../State/Products/Action'

const Home_Products = () => {
  const dispatch =useDispatch()
  const { products } = useSelector(state => state.products);
  
     useEffect(() => {
        dispatch(findProducts())
     }, [])
     
  return (
    <div className='products_grid p-5'>
      {
     products.content?.map((item, index) => <Product_Card product={item} key={index} />)
      }
    </div>
  )
}

export default Home_Products