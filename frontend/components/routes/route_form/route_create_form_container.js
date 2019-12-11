import { connect } from 'react-redux';
import RouteForm from './route_form';
import { openModal } from '../../../actions/modal_actions';
import { fetchArea } from '../../../actions/area_action';
import { createRoute } from '../../../actions/route_action';

const mapStateToProps = (state, ownProps) => {
  return {
    area: state.entities.areas[ownProps.match.params.areaId],
    route: {
      area_id: ownProps.match.params.areaId,
      author_id: state.session.id,
      name: "",
      route_type: "",
      rope_grade: -1,
      boulder_grade: -1,
      safety: "",
      first_ascensionist: undefined,
      first_ascent_date: undefined,
      length: "",
      pitches: "",
      protection: "",
      description: "",
      location: "",
      toprope: false,
      photos: []
    },
    errors: state.errors.route,
    formType: "create"
  };
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchArea: id => dispatch(fetchArea(id)),
    formAction: route => dispatch(createRoute(route)),
    openModalFAQ: () => dispatch(openModal("areaCreateFAQ"))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteForm);