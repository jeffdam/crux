import React from 'react';
import AreaShow from './area_show';
import { connect } from 'react-redux';
import { fetchArea } from '../../actions/area_action';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({entities, session}, ownProps) => {

  const area = entities.areas[ownProps.match.params.areaId];
  
  let author, routes = {}, subAreas = {}, parents;
  
  if (area && area.authorId) {
    author = entities.users[area.authorId];
    for (let routeId of area.routeIds) {
      if (entities.routes[routeId]) {
        routes[routeId] = entities.routes[routeId];
      } else {
        routes = null;
        break;
      }
    }
    for (let subAreaId of area.subAreaIds) {
      if (entities.areas[subAreaId]) {
        subAreas[subAreaId] = entities.areas[subAreaId];
      } else {
        subAreas = null;
        break;
      }
    }
    parents = area.parents;
  }
  
  return {
    area,
    author,
    subAreas,
    routes,
    parents,
    currentUser: session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArea: (id) => dispatch(fetchArea(id)),
    openModal: (modal) => dispatch(openModal(modal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AreaShow);