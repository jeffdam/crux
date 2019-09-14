import RouteRandomList from "./route_random_list";
import { connect } from 'react-redux';

const mapStateToProps = ({ entities }) => {

  return {
    routes: entities.routes,
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteRandomList);