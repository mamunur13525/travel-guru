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
import Booking from './component/Booking/Booking';
import CreateAccount from './component/CreateAccount/CreateAccount';
import Search from './component/Search/Search';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';



 export const UserContext = createContext();

function App() {
const [loggedIn, setLoggedIn] = useState({});
  return (
    <UserContext.Provider value={[loggedIn, setLoggedIn]}>
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
                    <PrivateRoute path='/booking'>
                      <Booking></Booking>
                    </PrivateRoute>
                    <Route path='/createaccount'>
                        <CreateAccount></CreateAccount>
                    </Route>
                    <Route paths="/search">
                       <Search></Search>
                    </Route>
                      
                    <Route path="*">
                      <h1>page not found</h1>
                    </Route>




                </Switch>

            </Router>
      </UserContext.Provider>
  );
}

export default App;
