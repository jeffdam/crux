// import React from 'react';
import RouteShow from './route_show';
import { connect } from 'react-redux';
import { fetchRoute } from '../../../actions/route_action';
import { openModal } from '../../../actions/modal_actions';

const mapStateToProps = ({ entities, session }, ownProps) => {
  const route = entities.routes[ownProps.match.params.routeId];

  let author;
  let routes = {};
  let areaPath;

  if (route && route.authorId) {
    author = entities.users[route.authorId];
    routes[route.id] = route;
    route.neighborRouteIds.forEach(id => {
      routes[id] = entities.routes[id];
    });
    areaPath = route.areaPath;
  };

  return {
    routes: routes,
    author: author,
    areaPath: areaPath,
    currentUser: session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRoute: (id) => dispatch(fetchRoute(id)),
    openModal: (modal) => dispatch(openModal(modal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteShow);