import React from 'react';
import AreaShow from './area_show';
import { connect } from 'react-redux';
import { fetchArea } from '../../actions/area_action';
import { fetchUser } from '../../actions/user_action';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({entities, session}, ownProps) => {

  const area = entities.areas[ownProps.match.params.areaId];
  
  let author;
  let routes = {};
  let subAreas = {};
  let parents;
  
  if (area) {
    if (area.authorId) {
      author = entities.users[area.authorId];
      area.routeIds.forEach(id => {
        routes[id] = entities.routes[id];
      });
      area.subAreaIds.forEach(id => {
        subAreas[id] = entities.areas[id];
      });
      parents = area.parents;
    }
  }

  return {
    area: area,
    author: author,
    subAreas: subAreas,
    routes: routes,
    parents: parents,
    currentUser: session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchArea: (id) => dispatch(fetchArea(id)),
    openModal: (modal) => dispatch(openModal(modal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AreaShow);