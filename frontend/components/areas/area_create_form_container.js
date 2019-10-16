import React from 'react';
import { connect } from 'react-redux';
import { createArea, fetchArea } from '../../actions/area_action';
import AreaForm from './area_form';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    parent: state.entities.areas[ownProps.match.params.areaId],
    area: {
      parent_id: ownProps.match.params.areaId,
      author_id: state.session.id,
      name: "",
      description: "",
      getting_there: "",
      latitude: "",
      longitude: "",
      photos: []
    },
    errors: state.errors.area,
    formType: "Create Area"
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchArea: id => dispatch(fetchArea(id)),
    formAction: area => dispatch(createArea(area)),
    openModal: modal => dispatch(openModal(modal))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(AreaForm);