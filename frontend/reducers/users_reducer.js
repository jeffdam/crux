import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import {merge} from "lodash";

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const newState = merge({}, oldState, {[action.user.id]: action.user});
      return newState;
    default:
      return oldState;
  }
};

export default usersReducer;