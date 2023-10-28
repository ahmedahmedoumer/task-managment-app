import React, { useEffect } from "react";
import CardComponent from "../CardComponent";
import PieChart from "../PieChart";
import { connect } from "react-redux";
import { fetchProjectStatusData } from "../../Store";
import Layout from "../Layout";
import LineChart from "../LineChart";

 function SidebarContent({projects,fetchProjectStatusData,error,loading}) {

  useEffect(()=>{
    fetchProjectStatusData();
  },[]);
  console.log(projects,"projectsssssssssss");
    const array=[1,2,3,4]
    const data = [
      { name: 'Jan', value: 10 },
      { name: 'Feb', value: 20 },
      { name: 'Mar', value: 15 },
      { name: 'Apr', value: 30 },
      { name: 'May', value: 25 },
    ];
  return <>
          <Layout>
            <div className='grid grid-cols-4 space-x-4 mt-20'>
              {projects?.map((item,index) => 
              <CardComponent
                    key={index}
                    text={item?.name}
                    number={item?.task?.length}
                    item={item}
                    startDate={item?.startDate}
                    endDate={item?.endDate}
                />)}
            </div>
            {projects && (<div>There is no Projects Available</div>)}
            <div className='flex justify-center items-center text-black font-serif mt-10'>
              <PieChart />
              {/* <LineChart data={data}/> */}
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