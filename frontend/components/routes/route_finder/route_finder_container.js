import { searchRoutes } from "../../../actions/route_action";
import RouteFinder from './route_finder';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    routes: Object.values(state.entities.routeFinderResults),
    areas: state.entities.areas
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchRoutes: () => dispatch(searchRoutes())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RouteFinder));