import usersReducer from "./users_reducer";
import areaReducer from "./area_reducer";
import routeReducer from "./route_reducer";
import {combineReducers} from "redux";

const entitiesReducers = combineReducers({
  users: usersReducer,
  areas: areaReducer,
  routes: routeReducer
});

export default entitiesReducers;