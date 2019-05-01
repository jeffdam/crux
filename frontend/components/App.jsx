import React from 'react';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Home from './home';
import Modal from './modal';


const App = () => (
  <div className="app">
    <Modal />
    {/* <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} /> */}
    <Route path="/" exact component={Home} />
   
  </div>
);

export default App;