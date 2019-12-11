import { RECEIVE_ROUTE_FINDER_RESULTS } from "../actions/route_action";

const routeFinderReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ROUTE_FINDER_RESULTS:
      return action.routes;
    default:
      return oldState;
  }
};

export default routeFinderReducer;