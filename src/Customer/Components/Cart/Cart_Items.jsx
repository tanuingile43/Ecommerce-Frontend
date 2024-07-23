import { Button, IconButton } from '@mui/material'
import React from 'react'
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5'

const Cart_Items = () => {





    return (
        <div className='p-3 mb-2 border-light box-shadow border-radius '>
            <div className="flex cart_items ">
                <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
                  image
                </div>
                <div className="ml-5 space-y-l">
                    <p className='font-semibold '>title</p>
                    <p className='opacity-70 '>Size :M5,White</p>
                    <p className='opacity-70 mt-1 '>Seller : Brand</p>
                    <div className="flex space-x-5 items-center  text-gray-900 pt-2">
                        <p className="font-semibold"> ₹999</p>
                        <p className=' opacity-50 line-through'>₹2999 </p>
                        <p className='text-green-600 font-semibold'>50% off</p>
                    </div>
                    <div className="lg:flex items-center lg:space-x-2 ">
                        <div className="flex  space-x-1">
                            <IconButton sx={{ color: "RGB(145,85,253)" }}>
                                <IoRemoveCircleOutline />
                            </IconButton>
                            <span className="py-2 px-2 rounded-sm" >qty</span>
                            <IconButton sx={{ color: "RGB(145,85,253)" }}>
                                <IoAddCircleOutline/>
                            </IconButton>

                        </div>
                        <Button  sx={{ color: "RGB(145,85,253)" }}>Remove</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Cart_Items