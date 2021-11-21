import React, {useContext} from 'react';
import { AuthContext } from './ProvideAuth';
import {Route, Redirect} from 'react-router-dom';
import { CircularProgress } from '@mui/material';


const PrivateRoute = ({ component: Component, ...rest }) => {
    const contextValue = useContext(AuthContext);
    return (
      <div>
  
      {contextValue.isAuthenticated == null && contextValue.loading ? <CircularProgress/> : (<Route
          {...rest}
          render={({ location }) =>
            contextValue.isAuthenticated ? (
              <Component></Component>
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              />
            )
          }
        />)}
      </div>
    );
  }
  
  export default PrivateRoute;