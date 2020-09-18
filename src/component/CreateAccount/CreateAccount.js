import React, { useState, useContext } from 'react';
import './CreateAccount.css';
import image from '../../images/favicon.png';
import { Link } from 'react-router-dom';
import img1 from '../../images/Icon/fb.png';
import img2 from '../../images/Icon/google.png';
import firebaseConfig from '../../firebaseConfig';
import * as firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom'

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const CreateAccount = () => {
    const [user, setUser] = useState({
        email: '',
        firstName: '',
        password: '',
        success: '',
        error: '',
        confirmPassword: '',
        lastName: '',
        isCreateUser: false,
    })
    const history = useHistory();
    const location = useLocation();
    const [loggedIn, setLoggedIn] = useContext(UserContext);

    /* Google Login */
    const googlelogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signInUser = { name: displayName, email }
            setLoggedIn(signInUser)
            history.replace('/');


            // ...
        }).catch(function (error) {
            const newUser = { ...user };
            newUser.error = error.message;
            setUser(newUser)
        });
    }
    /* Facebook Login */
    const fbLogin = () => {
        var fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(fbProvider).then(function (result) {
            const { displayName, email } = result.user;
            const signInUser = { name: displayName, email }
            setLoggedIn(signInUser)
            history.replace('/');

        }).catch(function (error) {

            const newUser = { ...user };
            newUser.error = error.message;
            setUser(newUser)
        });
    }

    /* Email and Password Cheacking */
    const handleBlur = (e) => {
        let validForm;
        if (e.target.name === "email") {
            validForm = /\S+@\S+\.\S+/.test(e.target.value)

        }
        if (e.target.name === "password") {
            const validPass = e.target.value;
            const newUser = { ...user };
            newUser[e.target.name] = validPass;
            setUser(newUser)
            validForm = validPass;

        }
        if (e.target.name === "confirmPassword") {
            const validPass = e.target.value;

            validForm = validPass;
            const newUser = { ...user };
            newUser[e.target.name] = validPass;
            setUser(newUser)

        }

        if (e.target.name === "firstName") {
            const newUser = { ...user };
            newUser[e.target.name] = e.target.value;
            setUser(newUser)
        }
        if (e.target.name === "lastName") {
            const newUser = { ...user };
            newUser[e.target.name] = e.target.value;
            setUser(newUser)

        }
        if (validForm) {
            const newUser = { ...user };
            newUser[e.target.name] = e.target.value;
            setUser(newUser);
            console.log(newUser)
        }
    }

    /* Form Submit */
    const formSubmit = (e) => {
        if (user.email && user.password) {
            if (user.password === user.confirmPassword) {
                firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                    .then(res => {
                        console.log(res);
                        const newUser = { ...user };
                        newUser.success = "Create Account Successfully. Pleace Login";
                        newUser.isCreateUser = true;
                        setUser(newUser);
                        updateProfile(user);

                    })
                    .catch(function (error) {
                        // Handle Errors here.
                        const newUser = { ...user };
                        newUser.error = error.message;
                        setUser(newUser)
                        // ...
                    });
            }
            else {
                alert('Password Not Match? Pleace check again ')
            }
        } 
        else {
            alert('Pleace fillup all fill ')
        }

        e.preventDefault();
    }
    const updateProfile = (user) => {
        const users = firebase.auth().currentUser;

        users.updateProfile({
            displayName: user.firstName + " " + user.lastName,
        }).then(function () {
            // Update successful.
        }).catch(function (error) {
            // An error happened.
        });
    }


    return (
        <div className="overlay white">

            <div className="container">
                <nav className='d-flex navbar p-4'>
                    <div>
                        <Link to="/home">
                            <img src={image} alt="" />
                        </Link>
                    </div>

                    <ul className="d-flex ul navbarUl">
                        <li to="/login">News</li>
                        <li>Destination</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        {
                            loggedIn.name || loggedIn.email ? <h4>{loggedIn.name}</h4> : <Link to="/login"> <button > Login</button></Link>
                        }
                    </ul>
                </nav>
            </div>
            <div className="maincontainer">
                <div className="login">
                    <form action="" >
                        <h3>Login</h3>
                        <input placeholder="First name" onBlur={handleBlur} className="w-100 " type="text" name="firstName" id="" required />
                        <input placeholder="Last name" onBlur={handleBlur} className="w-100" type="text" name="lastName" id="" required />
                        <input placeholder="Enter your email" onBlur={handleBlur} className="w-100" type="email" name="email" id="" required />
                        <input placeholder="Password" onBlur={handleBlur} className="w-100" type="password" name="password" id="" required />
                        <input placeholder="Confirm Password" onBlur={handleBlur} className="w-100" type="password" name="confirmPassword" id="" required />
                        <div className="d-flex justify-content-between">
                            <div><input type="checkbox" name="check" id="" /><label for="check">Remember Me</label></div>
                            <p className="link"><a href="#">Forgot Password</a> </p>
                        </div>
                        {
                            user.isCreateUser ?
                                <p style={{ color: 'green', textAlign: "center", fontWeight: "bold" }}>{user.success} </p> : <p style={{ color: 'red', textAlign: "center", fontWeight: "bold" }}>{user.error} </p>
                        }
                        <input onClick={formSubmit} className="loginInput" type="submit" value="Create an account" />


                    </form>
                    <p className="text-center">Already have an account   <Link to="/login">Log in</Link></p>

                </div>

                <div className="othersLogin w-25  m-auto">
                    <p className="text-center or">Or</p>
                    <div onClick={fbLogin} className="fblogin">
                        <img src={img1} alt="" />
                        <span>Continue with Facebook</span>
                    </div>
                    <div onClick={googlelogin} className="googlelogin">
                        <img src={img2} alt="" />
                        <span className="span2">Continue with Google</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CreateAccount;