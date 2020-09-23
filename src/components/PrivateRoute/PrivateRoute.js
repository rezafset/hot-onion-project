import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuthentication } from '../Login/UseAuth';

const PrivateRoute = ({children, ...rest}) => {
    const auth = useAuthentication();
    return (
        <Route
            {...rest}
            render={({ location }) =>
            auth.user ? (
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