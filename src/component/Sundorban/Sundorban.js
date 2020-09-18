import React from 'react';
import image1 from '../../images/bg-images/Sajek.png'
import image2 from '../../images/bg-images/Sreemongol.png'
import image3 from '../../images/bg-images/sundorbon.png'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Sundorban.css'
import fakeData from '../fakedata/fakedata';

const Sundorban = () => {
    const spotData = fakeData;
    return (
        <div className="sundorbanBg ">
            <div className="overlaythree">
            <Navbar></Navbar>
         
        <div className="row mt-5 ">
            <div className="left-side  mt-5 ">
                <h1>Sundorban</h1>
                <p className="pt-1 pb-3" style={{width: "400px"}}>Lorem ipsum dolor sit orem ipsum dolor sit orem ipsum dolor sit amet consectetur adipisicing elit. Vitae, repellat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, repellat?</p>
                <Link to={`/booking/`+spotData[1].nicname}><button>Booking </button></Link> 
            </div>
            <div className="right-side  mt-5 ">
                <div className="row ">

                   <div>
                       <Link to="/home">
                          <img src={image1} alt=""/>
                       </Link>
                     </div> 
                   <div>
                        <Link to="/sreemongol">
                           <img src={image2} alt=""/>
                        </Link>
                    </div>
                    <div>
                        <Link to="/sundorban">
                          <img src={image3} alt=""/>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
        </div>
</div>
    );
};

export default Sundorban;