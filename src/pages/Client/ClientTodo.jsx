import React from 'react'
import Layout from './ClientLayout';
import { Table } from 'antd';
import TableData from './tableData';
import { connect } from 'react-redux';
import { fetchAllTaskData, fetchTasksById, taskTransferToInProgressByTodoId, transferToDoneByinProgressId } from '../../Store';
import { useEffect } from 'react';
import { useState } from 'react';
import UserData from '../User/UserData';
import TaskBoard from './TaskBoard';
import moment from 'moment';

function ClientTodo({fetchAllTasks,taskTransferToDoneByinProgressId,taskTransferToInProgressByTodoId,taskList,userTask,task,error,loading}) {

    useEffect(()=>{
        fetchAllTasks();
    },[]);
    const daysLeft=(endDate)=>{
        const currentDate=moment();
        const targetDate=moment(endDate);
        const remainingDate=targetDate.diff(currentDate, 'days');
         return <span classname="bg-red-500 text-xs text-black px-3 py-1 rounded">{remainingDate}</span>
                                || <span classname="bg-green-500 text-xs text-white px-3 py-1 rounded">{remainingDate}</span>;
    }
    const getTasksByStatus = (status) => {
        return userTask?.filter((item)=>item?.taskStatus?.status==status);
      };
    const handleTransferToInProgress=(id)=>{
        taskTransferToInProgressByTodoId(id,taskList);
    }
    const handleTransferToDone=(id)=>{
        taskTransferToDoneByinProgressId(id,taskList);
    }
        
    const todoTasks = getTasksByStatus('to-do');
    const inProgressTasks = getTasksByStatus('in-progress');
    const doneTasks = getTasksByStatus('done');
  return (
    <div>
    <Layout>
    <div className="flex flex-row justify-center space-x-6 mt-20">
        <div className='flex bg-'></div>
      <div className="w-1/3">
        <div className="bg-blue-200 p-4 rounded">
          <h2 className="text-xl font-bold rounded">Todo</h2>
          {todoTasks.map((task) => (
            <div key={task.id} className="bg-white p-2 m-2 rounded font-serif">
            <p className="font-bold">{task.name}</p>
              <p>belongs To : {task?.project?.name}</p>
              <p>Start Date: {task?.startDate}</p>
              <p>End Date: {task?.endDate}</p>
              <p>{daysLeft(task?.endDate)}</p>

              
              <p>
                 <button className='bg-indigo-900 text-white text-xs rounded mb-0 mt-4 px-6 py-2' onClick={()=>handleTransferToInProgress(task?.id)}>transfer</button>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/3">
        <div className="bg-yellow-200 p-4 rounded">
          <h2 className="text-xl font-bold rounded">In Progress</h2>
          {inProgressTasks.map((task) => (
            <div key={task.id} className="bg-white p-2 m-2 font-serif rounded">
              <p className="font-bold">{task.name}</p>
              <p>belongs To : {task?.project?.name}{"  project"}</p>
              <p>Start Date: {task?.startDate}</p>
              <p>End Date: {task?.endDate}</p>
              <p>
              <button className='bg-yellow-600 text-white text-xs rounded mb-0 mt-4 px-6 py-2' onClick={()=>handleTransferToDone(task?.id)}>transfer</button>
              </p>
              </div>
          ))}
        </div>
      </div>

      <div className="w-1/3">
        <div className="bg-green-200 p-4 rounded ">
          <h2 className="text-xl font-bold rounded">Done</h2>
          {doneTasks.map((task) => (
            <div key={task.id} className=" bg-white p-2 m-2 rounded font-serif text-gray-900">
              <p className="font-bold">{task.name}</p>
              <p>belongs To : {task?.project?.name}</p>
              <p>Start Date: {task.startDate}</p>
              <p>End Date: {task.endDate}</p>
              <p className='mt-4'><span className='bg-green-600 text-white text-xs rounded mb-0 mt-4 px-6 py-2 font-serif font-bold'>pending to approval ....</span></p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </Layout>
    </div>
  )
}

export const mapStateToProps=(state)=>{
    const id=localStorage.getItem('id');
    return{
      taskList:state.taskReducer.taskList,
      userTask:state.taskReducer.taskList?.filter(item=>item?.user?.id==id),
      error:state.taskReducer.error,
      loading:state.taskReducer.loading,
    }
  }
  export const mapDispatchToProps=(dispatch)=>{
    return{
        fetchTasksById: () => dispatch(fetchTasksById()),
        taskTransferToDoneByinProgressId: (inprogressId,taskList) => dispatch(transferToDoneByinProgressId(inprogressId,taskList)),
        taskTransferToInProgressByTodoId: (todoId,taskList) => dispatch(taskTransferToInProgressByTodoId(todoId,taskList)),
        fetchAllTasks: () => dispatch(fetchAllTaskData()),
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(ClientTodo);