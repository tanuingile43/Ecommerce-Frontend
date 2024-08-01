import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getUser, logout } from '../../../State/Auth/Action';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Style.css';
import Order_Card from '../Cards/Order_Card';

const Profile = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const auth = useSelector(state => state.auth);
  const [addresses, setAddresses] = useState([]);
  

  useEffect(() => {
    if (auth.user && auth.user.address) {
      setAddresses(auth.user.address);
    }
  }, [auth.user]);

  const deleteAddress = async (id) => {
    try {
      // Make an API call to delete the address
      await axios.delete(`http://localhost:5000/api/user/address/${id}`, {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      });
      // Update the local state after successful deletion
      const updatedAddresses = addresses.filter(address => address._id !== id);
      setAddresses(updatedAddresses);
      // Show a toast notification
      toast.success('Address deleted successfully!');
    } catch (error) {
      console.error('Error deleting address:', error);
      toast.error('Failed to delete address.');
    }
  };

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, dispatch]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className='user_profile'>
      <ToastContainer />
      <h2>{auth.user?.firstName}'s Profile  & Addresses ({addresses.length})</h2>
      <div className="user_details">
        <div className="user_box">
          <div className="item">
            <div className="name">Username :</div> <p>{auth.user?.firstName} {auth.user?.lastName}</p>
          </div>
          <div className="item">
            <div className="name"> Email :</div> <p>{auth.user?.email}</p>
          </div>
          <div className="item">
            <div className="name"> Mobile: </div><p>{auth.user?.mobile}</p>
          </div>
          <button onClick={handleLogout} className='logout_btn'>
            Logout
          </button>
        </div>
        <div className="user_address">
           <div className="address_grid">
           {addresses.map((item, index) => (
            <div className="address_card" key={item._id}>
              <div className="user_name">Name : {item.firstName} {item.lastName}</div>
              <div className="email">Email : {item.email}</div>
              <div className="name">Mobile : {item.mobile}</div>
              <div className="name">Pincode : {item.zipCode}</div>
              <div className="name">Street : {item.streetAddress}</div>
              <div className="state_city">
                <div className="city">City : {item.city}</div>
                <div className="city">State : {item.state}</div>
              </div>
        
              <button onClick={() => deleteAddress(item._id)}>Delete</button>
            </div>
          ))}
           </div>
        </div>
      </div>
      <h2>{auth.user?.firstName}'s Orders</h2>

      <div className="orders flex">
        <div className="order">
            {
                [1,1,1,1,1,1,1,,1,1,1,1,1].map((item,index) => <Order_Card order={item} key={index} />)
            }
        </div>
        <div className="order_price">Price</div>
      </div>
    </div>
  );
};

export default Profile;
