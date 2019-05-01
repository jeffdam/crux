import React from 'react';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Home from './home';
import Header from './header/header';
import Footer from './footer/footer';

const App = () => (
  <div className="app">
    <Header />
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <Route path="/" exact component={Home} />
    <Footer />
  </div>
);

export default App;