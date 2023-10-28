import * as projectActionTypes from "./projectActionTypes";

const initialState={
    allProjects:[],
    error:'',
    loading:false
}

export const projectReducer=(state=initialState,actions)=>{
    switch(actions.type){
       case projectActionTypes.PROJECT_DATA_REQUEST:
         return{
            ...state,
            loading:true,
            }
        case projectActionTypes.PROJECT_DATA_SUCCESS:
            return{
                ...state,
                loading:false,
                allProjects:actions.payload,
            }
        case projectActionTypes.PROJECT_DATA_FAILURE:
            return{
                ...state,
                loading:false,
                error:actions.payload,
            }
        default:return state;

    }
}