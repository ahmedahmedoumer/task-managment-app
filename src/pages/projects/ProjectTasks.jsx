import React, { useCallback, useEffect, useState } from 'react'
import Table from '../../component/Table'
import Layout from '../../component/Layout';
import { addTaskToProject, deleteTaskOnProject, fetchAllUsersData, getProjectById, taskAssignToUser } from '../../Store';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import CreateProject from './CreateProject';
import assignProject from '../../component/assignProject';

function ProjectTasks({getProjectById,addTaskToProject,fetchAllUsersData,deleteTaskOnProject,taskAssignToUser,users,project,error,loading}) {
  const [assignTask,setAssignTask]=useState('');
  const [assignTo,setAssignTo]=useState('');
  const { id } = useParams();
  const [deleteItem,setDeleteItem]=useState('');
  const [isUserListOpen,setIsUserListOpen]=useState(false);

    useEffect(()=>{
      fetchAllUsersData();
    },[])
    const handlePopupSubmit = (data) => {
        setIsOpen(false);
        addTaskToProject(data,project);
    };
  if(deleteItem){
    deleteTaskOnProject(deleteItem,project);
    setDeleteItem('');
  }
  if(assignTask && assignTo){
  
    taskAssignToUser(assignTask,assignTo);
    setAssignTask('');
    setAssignTo('');

  }
  const [isOpen,setIsOpen]=useState(false);
    useEffect(()=>{
      getProjectById(id);
    },[]);
  return (<div>
            <Layout>
               <div className='text-3xl mt-16 font-serif text-gray-950 '>Number of Tasks </div>
               <div className='flex justify-end ml-5 px-3 py-2 rounded'>
                       <span onClick={()=>setIsOpen(!isOpen)} className='bg-gray-950 cursor-pointer text-md text-white font-serif px-7 py-2 rounded'>add task</span></div>
                <Table data={project?.task} 
                       setDeleteItem={setDeleteItem}
                       users={users}
                       assignTask={assignTask}
                       setAssignTask={setAssignTask}
                       assignTo={assignTo}
                       setAssignTo={setAssignTo}
                       isUserListOpen={isUserListOpen}
                       setIsUserListOpen={setIsUserListOpen}
                />   
                <CreateProject
                    title={"create Task"}
                    visible={isOpen}
                    onCancel={()=>setIsOpen(false)}
                    onSubmit={(data)=>{
                              handlePopupSubmit(data);
                              }}
                 />
                <assignProject
                    title={"assign task to user"}
                    users={users}
                    onSubmit={()=>console.log("hello assign task")}
                    onCancel={()=>setIsUserListOpen(false)}
                    visible={isUserListOpen}
                />              
           </Layout>
           </div>
  
)}
export const mapStateToProps=(state)=>{
  return{
    project:state.projectReducer.project,
    error:state.projectReducer.error,
    loading:state.projectReducer.loading,
    users:state.dashboardReducer.users,

  };
 };
 export const mapDispatchToProps=(dispatch)=>{
   return{
    getProjectById:(id) => dispatch(getProjectById(id)),
    addTaskToProject: (data,project) => dispatch(addTaskToProject(data,project)),
    deleteTaskOnProject: (id,project) => dispatch(deleteTaskOnProject(id,project)),
    fetchAllUsersData:() => dispatch(fetchAllUsersData()),
    taskAssignToUser:(assignTask,assignTo) => dispatch(taskAssignToUser(assignTask,assignTo)),

   };
 };
 
 export default connect(mapStateToProps,mapDispatchToProps)(ProjectTasks);

