import React from 'react';
import './Search.css';
import { Link } from 'react-router-dom';
import image from '../../images/favicon.png';
import img1 from '../../images/bg-images/Rectangle_26.png';
import img2 from '../../images/bg-images/Rectangle_27.png';
import img3 from '../../images/bg-images/Rectangle_28.png';
import star from '../../images/Icon/star_1_.png'

const Search = () => {
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
                            <li>Safin</li>
                        </ul>
                </nav>
                <hr/>
                <div>
                    <p className="mb-0"><small>252 stays Apr 13-17 3 guests</small></p>
                    <h5 className="font-weight-bold">Stay in Cox's Bazar</h5>
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
                                <h6>Light bright airy stylish apt & safe peaceful stay</h6>
                                <p>4 guests 2 bedrooms 2 beds 2 baths Wif Air conditionion Kithcen Cancelllation fexibitlity available</p>
                                <p><img className="imgStar" src={star} alt=""/>4.8(50) <span>$45/night <small>$67 total</small></span></p>
                            </div>
                            <div className="col-6">
                                <img className="img-short" src={img3} alt=""/>
                            </div>
                            <div className="col-6">
                                <h6>Light bright airy stylish apt & safe peaceful stay</h6>
                                <p>4 guests 2 bedrooms 2 beds 2 baths Wif Air conditionion Kithcen Cancelllation fexibitlity available</p>
                                <p><img className="imgStar" src={star} alt=""/>4.7(70) <span>$60/night <small>$67 total</small></span></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="map">
                          <iframe
                            style={{width:"600",
                            height:"450",
                            frameborder:"0" ,style:"border:0"}}
                            src="https://www.google.com/maps/embed/v1/place?key=API_KEY
                                &q=Space+Needle,Seattle+WA" allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;