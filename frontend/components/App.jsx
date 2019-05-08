import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ProtectedRoute, AreaRoute, RouteRoute } from '../util/protected_route_util';
import Home from './home';
import Modal from './modal';
import AreaShowContainer from './areas/area_show_container';
import AreaCreateFormContainer from './areas/area_create_form_container';
import AreaEditFormContainer from './areas/area_edit_form_container';
import RouteShowContainer from './routes/route_show/route_show_container';
import RouteCreateFormContainer from './routes/route_form/route_create_form_container';
import RouteEditFormContainer from './routes/route_form/route_edit_form_container'

const App = () => (
  <div className="app">
    <Modal />
    
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/areas/:areaId" component={AreaShowContainer} />
      <Route exact path="/routes/:routeId" component={RouteShowContainer} />
      <AreaRoute exact path="/areas/:areaId/edit" component={AreaEditFormContainer} />
      <RouteRoute exact path="/routes/:routeId/edit" component={RouteEditFormContainer} />
      <AreaRoute exact path="/add/climb-area/:areaId" component={AreaCreateFormContainer}/>
      <AreaRoute exact path="/add/climb-route/:areaId" component={RouteCreateFormContainer}/>
      <Redirect to="/"/>
    </Switch>
  </div>
);

export default App;