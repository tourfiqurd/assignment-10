import React from 'react';
import useAuth from './../../hooks/useAuth';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    const user = useAuth()
    const { isLoading } = useAuth()
    console.log(user);
    if (isLoading) {
        return <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    }
    return (

        <Route
            {...rest}
            render={({ location }) =>
                (user?.user.email) ? children :
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />

            }
        />

    );
};

export default PrivateRoute;