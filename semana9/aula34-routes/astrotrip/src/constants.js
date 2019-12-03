import React from "react";
import { Route, Redirect } from "react-router-dom";
import { routes } from './containers/Router/index';
import { setErrorMsg, setErrorIfNotAdminMsg } from "./actions/auth";
import { connect } from "react-redux";

export const rocketAnimationDuration = 1500

const mapDispatchToProps = dispatch => ({
    setErrorMsg: (errorMsg) => dispatch(setErrorMsg(errorMsg)),
    setErrorIfNotAdminMsg: (errorMsg) => dispatch(setErrorIfNotAdminMsg(errorMsg)),
})

export const Authenticator = connect(null, mapDispatchToProps)((props) => {

    const token = window.localStorage.getItem('token')
    if (!token) {

        props.setErrorMsg('errorToken')

        return (<Redirect to={{ pathname: routes.login, state: { from: props.location } }} />)
        
    } else {
        return props.children
    }
}) 

export const AuthenticatorAdm = connect(null, mapDispatchToProps)((props) => {

    const token = window.localStorage.getItem('token')
    const admin = window.localStorage.getItem('admin')

    if (!token || admin==="false") {

        props.setErrorIfNotAdminMsg('errorAdmin')
        return (<Redirect to={{ pathname: routes.admin, state: { from: props.location } }} />)
    } else {
        return props.children
    }
})

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        <Authenticator>        
            <Component {...props} />
        </Authenticator>
    )} />
)

export const PrivateRouteAdm = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        <AuthenticatorAdm>
            <Component {...props} />
        </AuthenticatorAdm>  
        )} />
)

