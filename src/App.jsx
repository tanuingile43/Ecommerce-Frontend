import React from 'react'
import './App.css'
import Customers from './Routes/Customer/Customer_Routes'
import {Route,Routes} from 'react-router-dom'
const App = () => {
  return (
    <div >
     <Routes>
      <Route path='/*' element={<Customers />} />
     </Routes>
    </div>
  )
}

export default App