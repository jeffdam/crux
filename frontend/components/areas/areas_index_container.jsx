import React from 'react';
import AreaIndex from './areas_index';
import { connect } from 'react-redux';
import { fetchAreas } from '../../actions/area_action';

const mapStateToProps = state => {
  let parents = {};

  for (let i = 1; i <= 50; i++) {
    parents[i] = state.entities.areas[i];
  }

  const parentsArray = Object.values(parents);

  return {
    areas: parentsArray
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAreas: () => dispatch(fetchAreas())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AreaIndex);