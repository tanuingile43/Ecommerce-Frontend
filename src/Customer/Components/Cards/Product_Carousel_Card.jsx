import React from 'react'
import { FaStar } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Product_Carousel_Card = () => {
 const navigate = useNavigate()

  const handleProductDetails = () =>{
    navigate('/product/:productId')
  }
  return (
    <div onClick={handleProductDetails} className='product_carousel_card cursor-pointer'>
        <div className="poster">

        </div>
        <div className="product_carousel_info">
          <div className="brand">Brand</div>
          <div className="title">Title</div>
          <div className="price_carousel_box flex items-center gap-3">
            <div className="discounted_price ">&#8377;999</div>
            <div className="price line-through">&#8377;2999</div>
            <div className="discount">50% Off</div>
          </div>
          <div className="rating_carousel_stock">
            <div className="rating">4.5 <FaStar className='flex items-center' size={13} /></div>
            <div className="stock">Qty: 3</div>
          </div>
        </div>
    </div>
  )
}

export default Product_Carousel_Card