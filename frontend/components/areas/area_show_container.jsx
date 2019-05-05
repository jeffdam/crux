import React from 'react';
import AreaShow from './area_show';
import { connect } from 'react-redux';
import { fetchArea } from '../../actions/area_action';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  const area = state.entities.areas[ownProps.match.params.areaId];
  return {
    area: area,
    currentUser: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArea: (id) => dispatch(fetchArea(id)),
    openModal: (modal) => dispatch(openModal(modal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AreaShow);