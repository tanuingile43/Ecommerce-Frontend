import React from 'react'
import { useNavigate } from 'react-router-dom'
import {FaStar} from 'react-icons/fa'
const Product_Card = () => {
  const navigate = useNavigate()

  const handleProductDetails = () =>{
    navigate('/product/:productId')
  }
  return (
    <div onClick={handleProductDetails} className='product_card cursor-pointer'>
        <div className="poster">

        </div>
        <div className="product_info">
          <div className="brand">Brand</div>
          <div className="title">Title</div>
          <div className="price_box flex items-center gap-3">
            <div className="discounted_price ">&#8377;999</div>
            <div className="price line-through">&#8377;2999</div>
            <div className="discount">50% Off</div>
          </div>
          <div className="rating_stock">
            <div className="rating">4.5 <FaStar className='flex items-center' size={13} /></div>
            <div className="stock">Qty: 3</div>
          </div>
        </div>
    </div>
  )
}

export default Product_Card