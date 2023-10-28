import axios from "axios";
import * as projectActionTypes from "./projectActionTypes";
import { URLst } from "../../utils/constants";

export const  projectDataRequest=()=>{
    return{
        type:projectActionTypes.PROJECT_DATA_REQUEST,
    }
}
export const projectDataSuccess=(data)=>{
    return{
        type:projectActionTypes.PROJECT_DATA_SUCCESS,
        payload:data,
    }
}
export const projectDataFailure=(error)=>{
    return{
        type:projectActionTypes.PROJECT_DATA_SUCCESS,
        payload:error,
    }
}

export const fetchAllProjectData=()=>{
    const token=localStorage.getItem('token');
    return (dispatch)=>{
        dispatch(projectDataRequest());
    axios({
        method:"get",
        url:`${URLst}/project`,
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    .then(res=>{
        console.log(res.data);
    })
    .catch(err=>{
        console.log(err);
    });

    }

} 

export const addProjectData=(data)=>{
    const token=localStorage.getItem('token');
    return (dispatch)=>{
        dispatch(projectDataRequest());
    axios({
        method:"post",
        url:`${URLst}/project`,
        data:data,
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    .then(res=>{
        console.log(res.data);
    })
    .catch(err=>{
        console.log(err);
    });
    }
} 

export const updateProjectData=(id,data)=>{
    const token=localStorage.getItem('token');
    return (dispatch)=>{
        dispatch(projectDataRequest());
    axios({
        method:"patch",
        url:`${URLst}/project/${id}`,
        data:data,
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    .then(res=>{
        console.log(res.data);
    })
    .catch(err=>{
        console.log(err);
    });

    }

} 


export const deleteProjectData=(id,data)=>{
    const token=localStorage.getItem('token');
    return (dispatch)=>{
        dispatch(projectDataRequest());
    axios({
        method:"delete",
        url:`${URLst}/project/${id}`,
         headers:{
            Authorization:`Bearer ${token}`
        }
    })
    .then(res=>{
        console.log(res.data);
    })
    .catch(err=>{
        console.log(err);
    });

    }

} 


