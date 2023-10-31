import React from 'react'
import Layout from './ClientLayout';
import { Table } from 'antd';
import TableData from './tableData';
import { connect } from 'react-redux';
import { fetchTasksById, taskTransferToInProgressByTodoId, transferToDoneByinProgressId } from '../../Store';
import { useEffect } from 'react';
import { useState } from 'react';
import UserData from '../User/UserData';

function ClientTodo({fetchTasksById,taskTransferToDoneByinProgressId,taskTransferToInProgressByTodoId,fetchAllTasks,taskList,userTask,task,error,loading}) {
    const [transferToInProgress,setTransferToInProgress]=useState('');
    const [transferToDone,setTransferToDone]=useState('');

    if(transferToInProgress != ''){
        taskTransferToInProgressByTodoId(transferToInProgress);
        setTransferToInProgress('');
    }
    if(transferToDone != ''){
        taskTransferToDoneByinProgressId(transferToDone);
        setTransferToDone('');
    }
    useEffect(()=>{
        fetchTasksById();

    },[]);
  return (
    <div>
    <Layout>
         <TableData
            data={userTask}
            setTransferToDone={setTransferToDone}
            transferToDone={transferToDone}
            transferToInProgress={transferToInProgress}
            setTransferToInProgress={setTransferToInProgress}
         />
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
        fetchTasksById: () =>dispatch(fetchTasksById()),
        taskTransferToDoneByinProgressId: (inprogressId) =>dispatch(transferToDoneByinProgressId(inprogressId)),
        taskTransferToInProgressByTodoId: (todoId) =>dispatch(taskTransferToInProgressByTodoId(todoId)),

        fetchAllTasks: () =>dispatch(fetchAllTaskData()),

    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(ClientTodo);