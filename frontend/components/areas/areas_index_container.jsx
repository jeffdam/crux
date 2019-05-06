import React from 'react';
import AreaIndex from './areas_index';
import { connect } from 'react-redux';
import { fetchAreas } from '../../actions/area_action';

const mapStateToProps = state => {
  let parents = {};

  // for (let i = 0, fro)

  // const areas = Object.values(state.entities.areas);
  // const parents = areas.slice(0,50);
  return {
    areas: parents
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAreas: () => dispatch(fetchAreas())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AreaIndex);