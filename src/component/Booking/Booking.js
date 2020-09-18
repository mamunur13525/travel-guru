import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Booking.css';
import icon from '../../images/Icon/calender_icon.png';
import {Link} from 'react-router-dom'


const Booking = (props) => {
  
    return (
        <div className="overlaybooking">
            <Navbar></Navbar>
           
              <div className="bookingContent  d-flex justify-content-around">
                <div className="leftSideBooking">
                    <h1>{}</h1>
                    <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero eius animi amet quo voluptatibus quisquam quam! Quaerat ut itaque voluptatem delectus, repellendus cupiditate nam molestias doloremque officia Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero eius animi amet quo voluptatibus quisquam quam! Quaerat ut itaque voluptatem delectus, repellendus cupiditate nam molestias doloremque officiaerror perferendis aliquid.</p>
                </div>
                <div className="rightSideBooking">
                    <div className="form">
                        <p>Origin</p>
                        <h4 className="toForm">Dhaka</h4>
                        <p>Destination</p>
                       <h4 className="toForm">Cox's Bazar</h4>
                        <div className="d-flex bookings justify-content-between">
                                <div >
                                    <p>Form</p>
                                    <p className="calender"><span className="mr-5">01/09</span> <img src={icon} alt=""/></p>
                                </div>
                                <div>
                                    <p>To</p>
                                    <p className="calender"><span className="mr-5">12/09</span><img src={icon} alt=""/></p>
                                </div>
                        </div>
                        <Link to="/search">
                         <button>Start Booking</button>
                        </Link>
                    </div>
                </div>
           </div>
         
        </div>
    );
};

export default Booking;