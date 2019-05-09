
import React from 'react';
import { fetchRoutes } from '../../../actions/route_action';
import RouteFinder from './route_finder';
import { connect } from 'react-redux';


const mapStateToProps = state => {
  return {
    routes: Object.values(state.entities.routes)
  };
};

const mapDispatchToProps = dispatch => {

  return {
    fetchRoutes: () => dispatch(fetchRoutes())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteFinder);