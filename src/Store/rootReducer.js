import { combineReducers } from "redux";
import { projectReducer } from "./Projects/projectReducer";
import { loginReducer } from "./Auth/authReducer";
import { dashboardReducer } from "./Dashboard/dashboardReducers";
const rootReducer=combineReducers({
    dashboardReducer:dashboardReducer,
    loginReducer:loginReducer,
    projectReducer:projectReducer,
    
  
});
export default rootReducer;