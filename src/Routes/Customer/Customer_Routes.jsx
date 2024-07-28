import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Navigation from '../../Customer/Components/Navigation/Navigation'
import Footer from '../../Customer/Components/Footer/Footer'
import Home from '../../Customer/Pages/Home'
import Products from '../../Customer/Components/Products/Products'
import Product_Details from '../../Customer/Pages/Product_Details'
import Cart from '../../Customer/Components/Cart/Cart'
import Checkout from '../../Customer/Components/Checkout/Checkout'
import Orders from '../../Customer/Components/Orders/Orders'
import Order_Details from '../../Customer/Pages/Order_Details'
import Payment_Sucess from '../../Customer/Components/Payment_Sucess/Payment_Sucess'
import Profile from '../../Customer/Components/Profile/Profile'

const Customer_Routes = () => {
  return (
    <div>
     <Navigation />
        <Routes>
        <Route path='/login' element={<Home />} />
        <Route path='/signup' element={<Home />} />
           <Route path='/' element={<Home />} />

           <Route path='/cart' element={<Cart />} />
                <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Products />} />
                <Route path='/product/:productId' element={<Product_Details />} />
                <Route path='/checkout/' element={<Checkout />} />
                <Route path='/account/order' element={<Orders />} />
                <Route path='/account/user-profile' element={<Profile />} />
                <Route path='/account/order/:orderId' element={<Order_Details />} />
                <Route path='/payment/:orderId' element={<Payment_Sucess />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default Customer_Routes