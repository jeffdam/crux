import React from 'react';
import AreaShow from './area_show';
import { connect } from 'react-redux';
import { fetchArea } from '../../actions/area_action';
import { fetchUser } from '../../actions/user_action';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  const route = state.entities.routes[ownProps.match.params.routeId];

  return {
    route: route,
    author: author,
    currentUser: state.session.id
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