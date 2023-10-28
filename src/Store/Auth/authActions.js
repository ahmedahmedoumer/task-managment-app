import axios from "axios";
import * as authActionTypes from "./authActionTypes";
import { URLst } from "../../utils/constants";

export const  loginRequest=()=>{
    return{
        type:authActionTypes.LOGIN_REQUEST
    }
}
export const loginSuccess=(data)=>{
    return{
        type:authActionTypes.LOGIN_SUCCESS,
        payload:data,
    }
}
export const loginFailure=(error)=>{
    return{
        type:authActionTypes.LOGIN_FAILURE,
        payload:error,
    }
}

export const userLoginRequest=()=>{
    const id='d3dfe7f0-6f8b-4d0a-8cb6-219e59153211';
    return (dispatch)=>{
        dispatch(loginRequest());
    axios({
        method:"get",
        url:`${URLst}/user/${id}`,
    })
    .then(res=>{
        const userData=res.data
        console.log(res.data);
        dispatch(loginSuccess(userData));
    })
    .catch(err=>{
        const error=err.message;
        console.log(error);
        dispatch(loginFailure(error));
    });

    }
} 



