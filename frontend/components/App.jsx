import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Home from './home';
import Modal from './modal';
import AreaShowContainer from './areas/area_show_container';
import AreaCreateFormContainer from './areas/area_create_form_container';
import AreaEditFormContainer from './areas/area_edit_form_container';

const App = () => (
  <div className="app">
    <Modal />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/areas/:areaId" component={AreaShowContainer} />
      <Route exact path="/areas/:areaId/edit" component={AreaEditFormContainer} />
      <Route exact path="/add/climb-area/:areaId" component={AreaCreateFormContainer}/>
      <Redirect to="/"/>
    </Switch>
  </div>
);

export default App;