import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";

const routes = {
  home: "/",
  login: "/login",
  listTrips: "/application-form",
  createTrips: "/trips/create",
  admin: "/trips/list",
  subscribed: "/trips/details"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.home} component={LoginPage} />
        <Route path={routes.login} component={LoginPage} />
        <Route path={routes.listTrips} component={LoginPage} />
        <Route path={routes.createTrips} component={LoginPage} />
        <Route path={routes.admin} component={LoginPage} />
        <Route path={routes.subscribed} component={LoginPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
