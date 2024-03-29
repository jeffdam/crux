import { RECEIVE_AREA, RECEIVE_AREA_ERRORS } from "../actions/area_action";

const areaErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_AREA:
      return [];
    case RECEIVE_AREA_ERRORS:
      return action.errors;
    default:
      return oldState;
  }
};

export default areaErrorsReducer;