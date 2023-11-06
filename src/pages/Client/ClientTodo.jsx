import React, { useState } from 'react'
import Layout from './ClientLayout';
import { connect } from 'react-redux';
import { fetchAllTaskData, fetchTasksById, taskTransferToInProgressByTodoId, transferToDoneByinProgressId } from '../../Store';
import { useEffect } from 'react';
import moment from 'moment';
import { DndProvider, useDrag,useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function ClientTodo({fetchAllTasks,taskTransferToDoneByinProgressId,taskTransferToInProgressByTodoId,taskList,userTask,task,error,loading}) {
     const imageSource=[
      {
        id:1,
        url:'../public/4258468533.jpg',
      },
      {
        id:2,
        url:'../public/4258468533.jpg',
      },
      {
        id:3,
        url:'../public/4258468533.jpg',
      },
     ]
     const [board,setBoard]=useState([]);
    //  const [{ isDragging }, drag] = useDrag(() => ({
    //   type: "image",
    //   collect: (monitor) => ({
    //     isDragging: !!monitor.isDragging(),
    //   }),
    // }));
    
    //  const [{isOver},drop]=useDrop(()=>({
    //   accept:"image",
    //   drop:(item)=>addImageToBoard(item.id),
    //   collect:(monitor)=>({
    //     isOver:!!monitor.isOver(),
    //   }),
    //  }));
    const addImageToBoard=(item)=>{
      console.log(item);
    }
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
    <Layout>
      <DndProvider backend={HTML5Backend}>
            <div className='mt-20 pictures flex space-x-3 rounded '>
                {imageSource.map(item=>(
                      <img className='w-1/3' src={item.url} alt={`image ${item.id}`} />
                ))}
            </div>
            <div className='board' >
              {board?.map((item)=>(
                      <img className='w-1/3' src={item.url} alt={`image ${item.id}`} />
              ))}

            </div>
      </DndProvider>
    
    </Layout>

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