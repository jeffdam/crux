import React from 'react';
import { connect } from 'react-redux';
import RouteForm from './route_form';
import { openModal } from '../../../actions/modal_actions';
import { fetchArea } from '../../../actions/area_action';
import { createRoute } from '../../../actions/route_action';
import { addRouteCount } from '../../../util/area_util';

const mapStateToProps = (state, ownProps) => {
  return ({
    area: state.entities.areas[ownProps.match.params.areaId],
    route: {
      area_id: ownProps.match.params.areaId,
      author_id: state.session.id,
      name: "", 
      route_type: "", 
      grade: "", 
      safety: "", 
      first_ascensionist: "", 
      first_ascent_date: "", 
      length: "", 
      pitches: 1, 
      protection: "", 
      description: "", 
      location: "",
      toprope: false,
    },
    errors: state.errors.route,
    formType: "create"
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchArea: id => dispatch(fetchArea(id)),
    formAction: route => dispatch(createRoute(route)),
    openModalFAQ: () => dispatch(openModal("areaCreateFAQ")),
    addRouteCount: area => addRouteCount(area)
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteForm);