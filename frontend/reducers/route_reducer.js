import { RECEIVE_ROUTES, RECEIVE_ROUTE, REMOVE_ROUTE } from "../actions/route_action";
import { RECEIVE_AREA } from "../actions/area_action";
import { merge } from "lodash";

const routeReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_ROUTES:
      return action.routes;
    case RECEIVE_ROUTE:
      newState = merge({}, oldState, { [action.route.id]: action.route });
      return newState;
      case REMOVE_ROUTE:
      newState = merge({}, oldState);
      delete newState[action.route.id];
      return newState;
    case RECEIVE_AREA:
      newState = merge({}, oldState, action.routes);
      return newState;
    default:
      return oldState;
  }
};

export default routeReducer;