import { RECEIVE_ROUTE, RECEIVE_ROUTE_ERRORS } from "../actions/route_action";

const routeErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ROUTE:
      return [];
    case RECEIVE_ROUTE_ERRORS:
      return action.errors;
    default:
      return oldState;
  }
};

export default routeErrorsReducer;