import { URLst } from "../../utils/constants";
import  *  as  allDashboardActionTypes from "./dashboardActionTypes";
import axios from "axios";

export const dashBoardDataRequest=()=>{
    return {
         type:allDashboardActionTypes.DASHBOARD_DATA_REQUEST
    }
}

export const dashBoardDataSuccess=(data)=>{
    return {
         type:allDashboardActionTypes.DASHBOARD_DATA_SUCCESS,
         payload:data
    }
}

export const dashBoardDataFailure=(error)=>{
    return {
         type:allDashboardActionTypes.DASHBOARD_DATA_FAILURE,
         payload:error
    }
}
export const allUsersDataSuccess=(data)=>{
    return {
        type:allDashboardActionTypes.ALL_USERS_DATA_REQUEST,
        payload:data
    }
}


export const fetchProjectStatusData=()=>{
   const token=localStorage.getItem("token");
    return (dispatch)=>{
        dispatch(dashBoardDataRequest());
        axios({
            method: "GET",
            url: `${URLst}/project`,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res)=>{
            const responseData=res.data.project;
            console.log(responseData.project,"ahmedinnnnnnnnnnnnnnn");
            dispatch(dashBoardDataSuccess(responseData));
          })
          .catch((err)=>{
            const errorData=err.message;
            console.log(errorData,"erorororororororo");
            dispatch(dashBoardDataFailure(errorData));

          })
        }}

export const fetchAllUsersData=()=>{
  const token=localStorage.getItem("token");
   return (dispatch)=>{
       dispatch(dashBoardDataRequest());
       axios({
           method: "GET",
           url: `${URLst}/users`,
           headers: {
             Authorization: `Bearer ${token}`,
           },
         })
         .then((res)=>{
           const responseData=res.data;
           dispatch(allUsersDataSuccess(responseData.data));
         })
         .catch((err)=>{
           const errorData=err.message;
           dispatch(dashBoardDataFailure(errorData));
         })
   }

}
// export const fetchAllUsersAssignedTickets=()=>{
//      const token=localStorage.getItem('token');
//   return (dispatch)=>{
//     dispatch(allUserAssignedTicketsRequest());
//     axios({
//       method: "GET",
//       url: `${URLst}/tickets/user-assigned-ticket`,
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     .then((res)=>{
//       const responseData=res.data;
//       const succssMessage="fetched successfully";
//       dispatch(allUserAssignedTicketsSuccess(responseData.data));
//       // dispatch(successMessage(succssMessage));
//     })
//     .catch((err)=>{
//       const errorData=err.message;
//       dispatch(allUserAssignedTicketsFailure(errorData));
//       dispatch(errorMessage(errorData));
//     })
//    }
// }


