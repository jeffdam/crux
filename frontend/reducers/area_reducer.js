import { RECEIVE_AREAS, RECEIVE_AREA, REMOVE_AREA } from "../actions/area_action";
import { merge } from "lodash";

const areaReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_AREAS:
      return action.areas;
    case RECEIVE_AREA:
      newState = merge({}, oldState, action.areas);
      return newState;
    case REMOVE_AREA:
      newState = merge({}, oldState);
      delete newState[action.area.id];
      return newState;
    default:
      return oldState;
  }
};

export default areaReducer;