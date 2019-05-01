import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Home from './home';
import Modal from './modal';


const App = () => (
  <div className="app">
    <Modal />
    <Switch>
      <Route exact path="/" component={Home} />
      <Redirect to="/"/>
    </Switch>
  </div>
);

export default App;