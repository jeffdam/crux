import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
        <Redirect to="/" />
      )
  )} />
);

// renders component if logged in, otherwise redirects to the login page
const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    loggedIn ? (
      <Component {...props} />
    ) : (
        <Redirect to="/login" />
      )
  )} />
);

const AreaProtected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    loggedIn ? (
      <Component {...props} />
    ) : (
        <Redirect to={`/areas/${props.match.params.areaId}`} /> 
      )
  )} />
);

// access the Redux state to check if the user is logged in
const mapStateToProps = state => {
  return { 
    loggedIn: Boolean(state.session.id)
  };
}


export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
export const AreaRoute = withRouter(connect(mapStateToProps)(AreaProtected));