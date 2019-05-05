import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER } from '../actions/user_action';
import {merge} from "lodash";

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_USER:
      newState = merge({}, oldState, { [action.user.id]: action.user });
      return newState;    
    case RECEIVE_CURRENT_USER:
      newState = merge({}, oldState, {[action.user.id]: action.user});
      return newState;
    default:
      return oldState;
  }
};

export default usersReducer;