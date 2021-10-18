import React, {Component} from 'react';
import {Redirect, Route} from "react-router-dom";
import {getToken} from "./Common";

const PublicRoute = ({component: Component, ...rest}) => {
    return(
        <Route
            {...rest}
            render={props => {
                return localStorage.getItem("token") ? <Component {...props} />
                    : <Redirect to={{pathname: "/dashboard", state: {from: props.location} }} />
            }}
            />
    )
}

export default PublicRoute;