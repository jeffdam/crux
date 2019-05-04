import { RECEIVE_AREA, RECEIVE_ERRORS } from "../actions/area_action";
import { merge } from "lodash";

const areaErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_AREA:
      return [];
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return oldState;
  }
};

export default areaErrorsReducer;