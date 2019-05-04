import React from 'react';
import AreaShow from './area_show';
import { connect } from 'react-redux';
import { fetchArea } from '../../actions/area_action';

const mapStateToProps = (state, ownProps) => {
  const area = state.entities.areas[ownProps.match.params.areaId];
  return {
    area: area
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArea: (id) => dispatch(fetchArea(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AreaShow);