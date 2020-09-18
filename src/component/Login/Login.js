import React, { useContext, useState } from 'react';
import './Login.css';
import image from '../../images/favicon.png';
import { Link } from 'react-router-dom';
import img1 from '../../images/Icon/fb.png';
import img2 from '../../images/Icon/google.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig'
import { UserContext } from '../../App';
import {useHistory, useLocation} from 'react-router-dom';


const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const [login, setLogin] = useState({
        error: '',
        email: '',
        password:''
        
    })

const [loggedIn, setloggedIn] = useContext(UserContext);
   if(firebase.app.length === 0){
    firebase.initializeApp(firebaseConfig);
   }
   const { from } = location.state || { from: { pathname: "/" } };
    const googlelogin =() => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
           const signInUser = {name:displayName, email}
            setloggedIn(signInUser)
            history.replace(from);
           
            
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorMessage = error.message;
            var email = error.email;
           
          });
    }
    const fbLogin=() => {
        var fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(fbProvider).then(function(result) {
            const {displayName, email} = result.user;
            const signInUser = {name:displayName, email}
             setloggedIn(signInUser)
             history.replace(from);
            
          }).catch(function(error) {
      
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    const handleChange=(e) => {
        let validForm ;
        if(e.target.name === "email"){
            validForm =  /\S+@\S+\.\S+/.test(e.target.value)    
        }
        if(e.target.name === "password"){
            const validPass = e.target.value.length>3;
            validForm= validPass;
          }
      
       
    if(validForm){
        const newUser= {...login};
        newUser.[e.target.name] = e.target.value;
        setLogin(newUser);
    }
 
}

    const logInBtn = (e) => {
        firebase.auth().signInWithEmailAndPassword(login.email, login.password)
        .then(res =>{
            console.log(res.user);
            const {displayName, email} = res.user;
            const signInUser = {displayName, email}
             setloggedIn(signInUser)
             history.push('/home');
        }) 
        .catch(function(error) {
            // Handle Errors here.
            // var errorCode = error.code;
        
            const loginerror = {...login};
            loginerror.error = error.message;
            setLogin(loginerror)
          });

       
    }
    const logInBtnz =(e) => {
        e.preventDefault();
    }

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
                            {
                             loggedIn.email? <h4>{loggedIn.name}{loggedIn.displayName}</h4>: <Link to="/login"> <button > Login</button></Link>
                             }
                        </ul>
                </nav>
            </div>
            <div className="maincontainer">
                <div className="login">
                    <form action="" onSubmit={logInBtnz}>
                        <h3>Login</h3>
                        <input onBlur={handleChange} placeholder="Username or Email" className="w-100 " type="email" name="email" id=""/>
                        <input onBlur={handleChange} placeholder="Password" className="w-100" type="password" name="password" id=""/>
                        <div className="d-flex justify-content-between">
                            <div><input type="checkbox" name="check" id=""/><label for="check">Remember Me</label></div>
                            <p className="link"><a href="">Forgot Password</a> </p>
                        </div>
                        <input onClick={logInBtn}  className="loginInput" type="submit" value="Login"/>
                        {
                            login.error&& <p>{login.error}</p> 
                        }
                    </form>
                   
                    <p className="text-center">Don't have an account?   <Link to="/createaccount"> Create an account</Link>  </p>
                </div>
                <div className="othersLogin w-25  m-auto">
                    <p className="text-center or">Or</p>
                    <div onClick={fbLogin} className="fblogin">
                        <img  src={img1} alt=""/>
                        <span>Continue with Facebook</span>
                    </div>
                    <div onClick={googlelogin} className="googlelogin">
                        <img src={img2} alt=""/>
                        <span className="span2">Continue with Google</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;