import React, { useState,createContext } from 'react';
import './App.css';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Sreemongol from './component/Sreemongol/Sreemongol';
import Sundorban from './component/Sundorban/Sundorban';
import SpotDetail from './component/SpotDetail/SpotDetail';
import CreateAccount from './component/CreateAccount/CreateAccount';
import Booking from './component/Booking/Booking';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';



 export const UserContext = createContext();
 export const ToristSpot = createContext();

function App() {

const [loggedIn, setLoggedIn] = useState({});
const [spot, setSpot]= useState({});

  return (
    <UserContext.Provider value={[loggedIn, setLoggedIn]}>
    <ToristSpot.Provider value={[spot, setSpot]}>


        <Router>
        
                <Switch>

                  
                    <Route path='/home'>
                        <Home></Home>
                    </Route>
                    <Route exact path='/'>
                        <Home></Home>
                    </Route>
                    <Route path='/login'>
                      <Login></Login>
                    </Route>
                    <Route path='/sreemongol'>
                     <Sreemongol></Sreemongol>
                    </Route>
                    <Route path='/sundorban'>
                      <Sundorban></Sundorban>
                    </Route>
                    <Route path='/booking/:nicName'>
                      <SpotDetail></SpotDetail>
                    </Route>
                    <Route path='/createaccount'>
                        <CreateAccount></CreateAccount>
                    </Route>
                    <PrivateRoute paths="/booking">
                       <Booking></Booking>
                    </PrivateRoute>
                      
                    <Route path="*">
                      <h1>page not found</h1>
                    </Route>




                </Switch>

            </Router>
        
      </ToristSpot.Provider>
      </UserContext.Provider>
  );
}

export default App;
