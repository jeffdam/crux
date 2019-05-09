import React from 'react';
import { connect } from 'react-redux';
import UploadPhotosForm from './upload_photos_form';
import { closeModal, openModal } from '../../actions/modal_actions';
import { updateArea } from '../../actions/area_action';
import { updateRoute } from '../../actions/route_action';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.areaId ? ownProps.match.params.areaId : ownProps.match.params.routeId;
  const actionType = ownProps.match.params.areaId ? "area" : "route";
  debugger
  return ({
    id: id,
    actionType: actionType
  });
};

const mapDispatchToProps = dispatch => {
  return {
    updateArea: area => dispatch(updateArea(area)),
    updateRoute: route => dispatch(updateRoute(route)),
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UploadPhotosForm));
