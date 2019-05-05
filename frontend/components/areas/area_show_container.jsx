import React from 'react';
import AreaShow from './area_show';
import { connect } from 'react-redux';
import { fetchArea } from '../../actions/area_action';
import { fetchUser } from '../../actions/user_action';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  const area = state.entities.areas[ownProps.match.params.areaId];
  let author;
  
  if (!area) {
    author = null;
  } else {
    author = state.entities.users[area.authorId];
  }

  return {
    area: area,
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