import React from 'react';
import Navbar from '../Navbar/Navbar';
import Maincontent from '../Maincontent/Maincontent';
import './Home.css';


const Home = () => {
    return (
        <div className="overlay">
            <Navbar></Navbar>
            <Maincontent></Maincontent>
        </div>
    );
};

export default Home;