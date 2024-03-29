import { connect } from 'react-redux';
import RouteForm from './route_form';
import { fetchRoute, updateRoute } from '../../../actions/route_action';

const mapStateToProps = (state, ownProps) => {

  const route = state.entities.routes[ownProps.match.params.routeId];
  let routeData;
  let area;

  if (route) {
    routeData = {
      id: route.id,
      area_id: route.areaId,
      author_id: route.authorId,
      name: route.name,
      route_type: route.routeType,
      rope_grade: route.ropeGrade,
      boulder_grade: route.boulderGrade,
      safety: route.safety,
      first_ascensionist: route.firstAscensionist,
      first_ascent_date: route.firstAscentDate,
      length: route.length,
      pitches: route.pitches,
      protection: route.protection,
      description: route.description,
      location: route.location,
      toprope: route.toprope,
      photos: []
    };
    area = state.entities.areas[route.areaId];
  }

  return ({
    area: area,
    route: routeData,
    errors: state.errors.route,
    currentUser: state.session.id,
    formType: "update"
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchRoute: id => dispatch(fetchRoute(id)),
    formAction: route => dispatch(updateRoute(route)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteForm);