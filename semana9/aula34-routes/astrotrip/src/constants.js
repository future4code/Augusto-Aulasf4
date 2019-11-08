import React from "react";
import { Route, Redirect } from "react-router-dom";
import { routes } from './containers/Router/index';
import { setErrorMsg } from "./actions/auth";
import { connect } from "react-redux";

export const rocketAnimationDuration = 1500

export const authenticator = (props) => {

    const token = window.localStorage.getItem('token')

    if (!token) {
        // props.setErrorMsg('errorToken')
        return false
    } else {
        return true
    }
}

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        authenticator() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: routes.login, state: { from: props.location } }} />
            )
    )} />
)

const mapDispatchToProps = dispatch => ({
    setErrorMsg: (errorMsg) => dispatch(setErrorMsg(errorMsg)),
})

export default connect(null, mapDispatchToProps)(authenticator)