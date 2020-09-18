import React, { useContext } from 'react';
import {Route, Redirect} from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute =({ children, ...rest }) => {
    const [loggedIn, setLoggedIn] = useContext(UserContext);
    return (
       
        <Route
        {...rest}
        render={({ location }) =>
        loggedIn.name ||loggedIn.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;