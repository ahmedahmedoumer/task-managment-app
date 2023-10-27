import { combineReducers } from "redux";
import { dashboardReducer } from "../Store/Dashboard/dashboardReducers";
const rootReducer=combineReducers({
    dashboardReducer:dashboardReducer,
  
});
export default rootReducer;