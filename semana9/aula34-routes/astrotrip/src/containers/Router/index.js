import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "../LoginPage";
import HomePage from "../HomePage";
import AdmPage from "../AdmPage";
import CreateTripPage from "../CreateTripPage";
import SubscribedPage from "../SubscribedPage";
import ShowTripsPage from "../ShowTripsPage";
import SignUpPage from "../SignUpPage";
import { PrivateRoute } from "../../constants";
import ApprovedCandidate from "../ApprovedPage";

export const routes = {
  home: "/",
  login: "/login",
  listTrips: "/application-form",
  createTrips: "/trips/create",
  admin: "/trips/list",
  subscribed: "/trips/details",
  signup: "/signup",
  approved: "/approved"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.login} component={LoginPage} />
        <Route path={routes.listTrips} component={ShowTripsPage} />
        <PrivateRoute path={routes.createTrips} component={CreateTripPage} />
        <PrivateRoute path={routes.admin} component={AdmPage} />
        <PrivateRoute path={routes.subscribed} component={SubscribedPage} />
        <PrivateRoute path={routes.signup} component={SignUpPage} />
        <PrivateRoute path={routes.approved} component={ApprovedCandidate} />
        <Route path={routes.home} component={HomePage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default (Router)
