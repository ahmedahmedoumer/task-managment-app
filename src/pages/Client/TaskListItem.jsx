import React, { useState } from 'react';
import Layout from './ClientLayout';
import { connect } from 'react-redux';
import { fetchAllTaskData } from '../../Store';
import { useEffect } from 'react';
import Table from '../../component/Table';
import { SearchOutlined } from '@ant-design/icons';
function TaskListItem({fetchAllTasks,taskList,error,loading}) {
  const [activeTab, setActiveTab] = useState(1);
  const [searchData,setSearchData]=useState('');
  const [filteredTask,setFilteredTask]=useState();
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  useEffect(()=>{
    fetchAllTasks();
  },[]);
  return (
    <Layout>
      <div className='mt-20'>
          <div className="flex ml-10">
              <a href="#" className="absolute mt-1 ml-1"><SearchOutlined/></a>
              <span><input type="text" name="searchData" id="search" defaultValue={searchData} onChange={(e)=>setFilteredTask(taskList?.filter(item => item?.name?.includes(e.target.value)))} className="py-2 px-8 rounded border boredr-gray-100" /></span>
          </div>
      <Table data={!filteredTask? taskList : filteredTask} taskList={true}/>  
      </div>
    </Layout>
  );
}
export const mapStateToProps=(state)=>{
  return{
    taskList:state.taskReducer.taskList,
    error:state.taskReducer.error,
    loading:state.taskReducer.loading,
  }
}
export const mapDispatchToProps=(dispatch)=>{
  return{
    fetchAllTasks: () =>dispatch(fetchAllTaskData()),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TaskListItem);
