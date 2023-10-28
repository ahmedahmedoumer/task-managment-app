import { combineReducers } from "redux";
import { dashboardReducer } from "../Store/Dashboard/dashboardReducers";
import { loginReducer } from "./Auth/authReducer";
const rootReducer=combineReducers({
    dashboardReducer:dashboardReducer,
    loginReducer:loginReducer,
  
});
export default rootReducer;