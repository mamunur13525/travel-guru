import React from 'react';
import './Maincontent.css'
import image1 from '../../images/bg-images/Sajek.png'
import image2 from '../../images/bg-images/Sreemongol.png'
import image3 from '../../images/bg-images/sundorbon.png'
import { Link } from 'react-router-dom';

const Maincontent = () => {
    return (
        <div className='d-flex mt-5 '>
           
                <div className="row mt-5">
                    <div className="left-side">
                        <h1>Cox's bazar</h1>
                        <p className="pt-1 pb-3" style={{width: "400px"}}>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south?</p>
                       <Link to="/booking"><button>Booking </button></Link> 
                    </div>
                    <div className="right-side">
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
    );
};

export default Maincontent;