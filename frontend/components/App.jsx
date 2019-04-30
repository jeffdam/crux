import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import logoHex2 from '../../app/assets/images/logoHex2.svg';

const App = () => (
  <div>
    <header className="header-container">
      <img src={logoHex2}  alt="Crux Logo"></img>
      <GreetingContainer/>
      <h1>Crux</h1>
    </header>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;

// app / views / static_pages / root.html.erb
// app / assets / images / logoHex2.svg