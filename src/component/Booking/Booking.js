import React, {  useContext } from 'react';
import './Booking.css';
import { Link, useParams } from 'react-router-dom';
import image from '../../images/favicon.png';
import img1 from '../../images/bg-images/Rectangle_26.png';
import img2 from '../../images/bg-images/Rectangle_27.png';
import img3 from '../../images/bg-images/Rectangle_28.png';
import star from '../../images/Icon/star_1_.png'
import { UserContext, ToristSpot } from '../../App';
import fakeData from '../fakedata/fakedata';
import mapImg from '../../images/location/map.png'

const Booking = () => {
    const {nicName} = useParams();
  console.log(nicName)
  
  const spotData = fakeData;
  const target = spotData.find(data =>  data.nicname === nicName);
    console.log(target)

    const [loggedIn, setLoggedIn] = useContext(UserContext);
   
    const [spot, setSpot] = useContext(ToristSpot);
    console.log(spot)
    return (
        <div className="bg-search">
             <div className="container">
               <nav className='d-flex navbar p-4'>
                        <div>
                        <Link to="/home">
                                <img src={image} alt=""/>
                        </Link>
                        </div>
                    
                        <ul className="d-flex searchUl">
                            <li to="/login">News</li>
                            <li>Destination</li>
                            <li>Blog</li>
                            <li>Contact</li>
                            {
                           loggedIn.name ||loggedIn.email? <h4>{loggedIn.name}{loggedIn.displayName}</h4>: <Link to="/login"> <button > Login</button></Link>
                       }
                        </ul>
                </nav>
                <hr/>
                <div>
                    <p className="mb-0"><small>252 stays Apr 13-17 3 guests</small></p>
                    <h5 className="font-weight-bold">Stay in {spot.name}</h5>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="row">
                            <div className="col-6 mt-4">
                                <img className="img-short" src={img1} alt=""/>
                            </div>
                            <div className="col-6 mt-4">
                                <h6>Light bright airy stylish apt & safe peaceful stay</h6>
                                <p>4 guests 2 bedrooms 2 beds 2 baths Wif Air conditionion Kithcen Cancelllation fexibitlity available</p>
                                <p><img className="imgStar" src={star} alt=""/>4.9(20) <span>$34/night <small>$67 total</small></span></p>
                            </div>
                            <div className="col-6 my-4">
                                <img className="img-short" src={img2} alt=""/>
                            </div>
                            <div className="col-6 my-4">
                                <h6>Apartment in Lost Panorama</h6>
                                <p>3 guests 2 bedrooms 2 beds 2 baths Wif Air conditionion Kithcen Cancelllation fexibitlity available</p>
                                <p><img className="imgStar" src={star} alt=""/>4.8(50) <span>$45/night <small>$67 total</small></span></p>
                            </div>
                            <div className="col-6">
                                <img className="img-short" src={img3} alt=""/>
                            </div>
                            <div className="col-6">
                                <h6>AR Lounge & Pool (r&r + b&b)</h6>
                                <p>4 guests 2 bedrooms 2 beds 2 baths Wif Air conditionion Kithcen Cancelllation fexibitlity available</p>
                                <p><img className="imgStar" src={star} alt=""/>4.7(70) <span>$60/night <small>$67 total</small></span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="map">
                           <img style={{width:'480px', height:'600px', borderRadius:'40px;'}} src={mapImg} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;