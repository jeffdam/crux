import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Home from './home';
import Modal from './modal';


const App = () => (
  <div className="app">
    {/* <AuthRoute component={Modal}/> */}
    <Modal />
    <Route path="/" component={Home} />

  </div>
);

export default App;