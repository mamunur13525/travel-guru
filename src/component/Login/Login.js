import React from 'react';
import './Login.css';
import image from '../../images/favicon.png';
import { Link } from 'react-router-dom';
import img1 from '../../images/Icon/fb.png';
import img2 from '../../images/Icon/google.png';


const Login = () => {
    return (
        <div className="overlay white">
               <div className="container">
               <nav className='d-flex navbar p-4'>
                    <div>
                        <Link to="/home">
                            <img src={image} alt=""/>
                        </Link>
                    </div>
                  
                        <ul className="d-flex ul navbarUl">
                            <li to="/login">News</li>
                            <li>Destination</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        <Link to="/login"> <button> Login</button></Link>
                        </ul>
                </nav>
            </div>
            <div className="maincontainer">
                <div className="login">
                    <h3>Login</h3>
                    <input placeholder="Username or Email" className="w-100 " type="email" name="" id=""/>
                    <input placeholder="Password" className="w-100" type="password" name="" id=""/>
                    <div className="d-flex justify-content-between">
                        <div><input type="checkbox" name="check" id=""/><label for="check">Remember Me</label></div>
                        <p className="link"><a href="">Forgot Password</a> </p>
                    </div>
                    <input className="loginInput" type="submit" value="Login"/>
                    <p className="text-center">Don't have an account?   <Link to="/createaccount"> Create an account</Link>  </p>
                </div>
                <div className="othersLogin w-25  m-auto">
                    <p className="text-center or">Or</p>
                    <div className="fblogin">
                        <img  src={img1} alt=""/>
                        <span>Continue with Facebook</span>
                    </div>
                    <div className="googlelogin">
                        <img src={img2} alt=""/>
                        <span className="span2">Continue with Google</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;