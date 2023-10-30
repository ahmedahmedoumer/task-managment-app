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

export const userLoginRequest=(formData)=>{
    const token=localStorage.getItem('token');
    return (dispatch)=>{
        dispatch(loginRequest());
    axios({
        method:"post",
        url:`${URLst}/auth`,
        data:formData,
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    .then(res=>{
        const userData=res.data
        let permission=[];
        userData?.role?.permission?.map(item=>{
            permission.push(item.slug);
        });
        localStorage.setItem("permission",permission);
        localStorage.setItem('firstName',`${userData.firstName}`);
        localStorage.setItem('lastName',`${userData.lastName}`);
        localStorage.setItem('email',`${userData.email}`);
        localStorage.setItem('id',`${userData.id}`);
        localStorage.setItem("token",`${res?.userToken}`);
        localStorage.setItem("roleType",`${userData?.role?.name}`)
        dispatch(loginSuccess(userData));
        window.location.href = '/dashboard';
    })
    .catch(err=>{
        const error=err.message;
        dispatch(loginFailure(error));
    });

    }
} 



