import usersReducer from "./users_reducer";
import areaReducer from "./area_reducer";
import {combineReducers} from "redux";

const entitiesReducers = combineReducers({
  users: usersReducer,
  areas: areaReducer
});

export default entitiesReducers;