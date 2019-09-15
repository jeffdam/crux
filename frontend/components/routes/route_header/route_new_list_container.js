import RouteNewList from "./route_new_list";
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

export default connect(mapStateToProps, mapDispatchToProps)(RouteNewList);