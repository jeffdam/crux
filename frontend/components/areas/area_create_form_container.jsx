import React from 'react';
import { connect } from 'react-redux';
import { createArea } from '../../actions/area_action';
import AreaForm from './area_form';

const mapStateToProps = (state, ownProps) => {
  
  return ({
    area: {
      parent_name: state.entities.areas[ownProps.match.params.parentAreaId].name,
      parent_id: ownProps.match.params.parentAreaId,
      author_id: state.session.id,
      name: "",
      description: "",
      getting_there: "",
      latitude: "",
      longitude: "",
    },
    formType: "Create Area"
  });
};

const mapDispatchToProps = dispatch => {
  return({
    formAction: area => dispatch(createArea(area))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(AreaForm);