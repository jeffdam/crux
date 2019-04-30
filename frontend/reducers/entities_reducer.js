import usersReducer from "./users_reducer";
import {combineReducers} from "redux";

const entitiesReducers = combineReducers({
  users: usersReducer
});

export default entitiesReducers;