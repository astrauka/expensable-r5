import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from '../routers';
import { createStore } from 'redux';
import { appReducers } from '../reducers';
import { reduxRouteComponent } from 'redux-react-router';

let store = createStore(appReducers);
const RouteComponent = reduxRouteComponent(store);

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <AppRouter RouteComponent={RouteComponent}/>}
      </Provider>
    );
  }
}
