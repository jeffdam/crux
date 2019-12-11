import RouteNewList from "./route_new_list";
import { connect } from 'react-redux';
import { fetchRecentlyAddedRoute } from "../../../actions/route_action";

const mapStateToProps = ({ entities }) => {
  const routes = Object.values(entities.routes);
  return (
    { routes }
  );
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRecentlyAddedRoute: () => dispatch(fetchRecentlyAddedRoute())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteNewList);