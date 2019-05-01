import { combineReducers } from "redux";
import modalReducers from "./modal_reducer";


const uiReducer = combineReducers({
  modal: modalReducers,
});

export default uiReducer;