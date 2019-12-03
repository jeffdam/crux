import { searchRoutes } from "../../../actions/route_action";
import { connect } from 'react-redux';
import RouteFinderForm from './route_finder_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    searchParams: {
      route_type: [],
      toprope: false,
      r_grade_min: 0,
      r_grade_max: 70,
      b_grade_min: 0,
      b_grade_max: 54,
      pitches: 1,
      sort_by: "name"
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchRoutes: searchParams => dispatch(searchRoutes(searchParams))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RouteFinderForm));