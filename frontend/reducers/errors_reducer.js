import {combineReducers} from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import areaErrorsReducer from './area_errors_reducer';
import routeErrorsReducer from "./route_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  area: areaErrorsReducer,
  route: routeErrorsReducer
});

export default errorsReducer;