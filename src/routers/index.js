import React, { Component } from 'react';
import Router, { Route, DefaultRoute, NotFoundRoute } from 'react-router';
import { Guest as GuestLayout } from '../layouts/Guest';

export class AppRouter extends Component {
  render() {
    return(
      <Router>
        <Route component={this.props.RouteComponent}>
          <Route handler={GuestLayout} path="/">
          </Route>
        </Route>
      </Router>
    );
  }
}
