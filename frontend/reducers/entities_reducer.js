import usersReducer from "./users_reducer";
import areaReducer from "./area_reducer";
import routeReducer from "./route_reducer";
import routeFinderReducer from "./route_finder_reducer";
import {combineReducers} from "redux";

const entitiesReducers = combineReducers({
  users: usersReducer,
  areas: areaReducer,
  routes: routeReducer,
  routeFinderResults: routeFinderReducer
});

export default entitiesReducers;