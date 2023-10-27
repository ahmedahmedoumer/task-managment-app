import React, { useEffect } from "react";
import CardComponent from "../CardComponent";
import PieChart from "../PieChart";
import { connect } from "react-redux";
import { fetchProjectStatusData } from "../../Store";
import Layout from "../Layout";

 function SidebarContent({projects,fetchProjectStatusData,error,loading}) {

  useEffect(()=>{
    fetchProjectStatusData();
  },[]);
  console.log(projects,"projectsssssssssss");
    const array=[1,2,3,4]
  return <>
          <Layout>
            <div className='grid grid-cols-4 space-x-4 mt-20'>
              {array.map((index) => 
              <CardComponent
                    key={index}
                    text="Sample Text"
                    number="42"
                    icon="Icon"
                    startDate="2023-01-01"
                    endDate="2023-12-31"
                />)}
            </div>
            <div className='flex justify-center items-center text-black font-serif mt-10'>
              <PieChart />
            </div>
            </Layout>
         </>

}

export const mapStateToProps=(state)=>{
 return{
   projects:state.dashboardReducer.projects,
   error:state.dashboardReducer.error,
   loading:state.dashboardReducer.loading,
 }
}
export const mapDispatchToProps=(dispatch)=>{
  return{
    fetchProjectStatusData:() => dispatch(fetchProjectStatusData()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SidebarContent);