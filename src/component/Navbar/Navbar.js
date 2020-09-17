import React, { useState } from 'react';
import image from '../../images/logo.png';
import './Navbar.css';

import { Link } from 'react-router-dom';

const Navbar = () => {

   
  
    return (
        <div className="bg">
           <div className="container">
               <nav className='d-flex navbar p-4'>
                    <div>
                    <Link to="/home">
                            <img src={image} alt=""/>
                    </Link>
                    </div>
                    <div>
                        <input className="searchBox" type="search" name="" placeholder="Search your destination" id=""/>
                    </div>
                    <ul className="d-flex ul">
                        <li to="/login">News</li>
                        <li>Destination</li>
                        <li>Blog</li>
                        <li>Contact</li>
                       <Link to="/login"> <button> Login</button></Link>
                    </ul>
               </nav>
           </div>
        </div>
    );
};

export default Navbar;