import React, { useContext, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Booking.css';
import icon from '../../images/Icon/calender_icon.png';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../fakedata/fakedata';
import { ToristSpot } from '../../App';



const Booking = () => {
  const {nicName} = useParams();
  
  const spotData = fakeData;
  const target = spotData.find(data =>  data.nicname === nicName)
  console.log(target)

  const style ={
    backgroundImage:`url(${target.pic})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'

  }
 const [spot, setSpot] = useContext(ToristSpot)
      setSpot(target);
    return (
        <div style={style}>
        <div className="overlaybooking">
            <Navbar></Navbar>
           
              <div className="bookingContent  d-flex justify-content-around">
                <div className="leftSideBooking">
                  <h1>{target.name}</h1>
                  <p style={{textAlign:'justify'}}>{target.detail}</p>
                </div>
                <div className="rightSideBooking">
                    <div className="form">
                        <p>Origin</p>
                        <h4 className="toForm"><input style={{border:"none",width:'100%',fontWeight:'bold'}} type="text" name="" id=""/></h4>
                        <p>Destination</p>
                       <h4 className="toForm">{target.name}</h4>
                        <div className="d-flex bookings justify-content-between">
                                <div className="dateFromOne">
                                    
                                    <label for="from">From</label>
                                  <input className="calender" type="date" name="from" id="from" required=""/>

                                </div>
                               
                                  
                                <div className="dateFromTwo">
                                    
                                  <label for="from">To</label>
                                  <input className="calender" type="date" name="from" id="from" required=""/>

                                </div>
                        </div>
                        <Link to='/search'>
                         <button>Start Booking</button>
                        </Link>
                    </div>
                </div>
           </div>
         
        </div>
        </div>
    );
};

export default Booking;