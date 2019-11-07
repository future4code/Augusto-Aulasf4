import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import HomePage from "../HomePage";
import AdmPage from "../AdmPage";
import CreateTripPage from "../CreateTripPage";
import SubscribedPage from "../SubscribedPage";
import ShowTripsPage from "../ShowTripsPage";
import SignUpPage from "../SignUpPage";

export const routes = {
  home: "/",
  login: "/login",
  listTrips: "/application-form",
  createTrips: "/trips/create",
  admin: "/trips/list",
  subscribed: "/trips/details",
  signup: "/signup"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.login} component={LoginPage} />
        <Route path={routes.listTrips} component={ShowTripsPage} />
        <Route path={routes.createTrips} component={CreateTripPage} />
        <Route path={routes.admin} component={AdmPage} />
        <Route path={routes.subscribed} component={SubscribedPage} />
        <Route path={routes.signup} component={SignUpPage} />
        <Route path={routes.home} component={HomePage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
