import React, { useEffect } from 'react'

import { Button } from '@mui/material'
import { useLocation } from 'react-router-dom'
import Address_Card from '../Cards/Address_Card'

const  Order_Summery = () => {





  return (
    <div>
      <div className='p-5 border-light box-shadow border-radius'>
        <Address_Card />
      </div>
      <div className='mt-5'>
        <div className="lg:grid grid-cols-3 relative">
          <div className='col-span-2'>
            Order Items
          </div>

          <div className="px-5 sticky top-0 h-auto mt-5 lg:mt-0">
            <div className="border rounded-md p-5 ">
              <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
              <hr />
              <div className="space-y-2 ">
                <div className="flex justify-between pt-2 text-black ">
                  <span>Price</span>
                  <span>₹ totalPrice</span>
                </div>
                <div className="flex justify-between pt-2 ">
                  <span>Discount</span>
                  <span className=' text-green-600'>-₹ discount</span>
                </div>
                <div className="flex justify-between pt-2 text-black ">
                  <span>Delivery Charge</span>
                  <span>Free</span>
                </div>
                <hr />
                <div className="flex justify-between pt-3 text-black font-bold ">
                  <span>Total Amount</span>
                  <span className=' text-green-600'>₹ totalDiscountPrice </span>
                </div>
              </div>
              <Button variant='contained' className='w-full' sx={{ px: '2rem', py: '.7rem', mt: "2rem", bgcolor: "#9155fd" }} >
                Checkout
              </Button>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Order_Summery