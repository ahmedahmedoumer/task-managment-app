import React from 'react';

const TaskBoard = ({ data,setTransferToDone,transferToDone,transferToInProgress,setTransferToInProgress,tasks }) => {

  console.log(data,"users data hiluf ");
  const getTasksByStatus = (status) => {
    return data?.filter((item)=>item?.taskStatus?.status==status);
  };

  const todoTasks = getTasksByStatus('to-do');
  const inProgressTasks = getTasksByStatus('in-progress');
  const doneTasks = getTasksByStatus('done');

  return (
    <div className="flex flex-row justify-center space-x-6 mt-20">
      <div className="w-1/3">
        <div className="bg-blue-200 p-4">
          <h2 className="text-xl font-bold rounded">Todo</h2>
          {todoTasks.map((task) => (
            <div key={task.id} className="bg-white p-2 m-2 rounded">
              <p>{task.name}</p>
              <p>belongs To : {task?.project?.name}{"  project"}</p>
              <p>Start Date: {task?.startDate}</p>
              <p>End Date: {task?.endDate}</p>
              <p>
                 <button className='bg-indigo-900 text-white text-xs rounded mb-0 mt-4 px-6 py-2' onClick={()=>setTransferToInProgress(task?.id)}>transfer</button>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/3">
        <div className="bg-yellow-200 p-4 rounded">
          <h2 className="text-xl font-bold rounded">In Progress</h2>
          {inProgressTasks.map((task) => (
            <div key={task.id} className="bg-white p-2 m-2">
              <p>{task.name}</p>
              <p>belongs To : {task?.project?.name}{"  project"}</p>
              <p>Start Date: {task?.startDate}</p>
              <p>End Date: {task?.endDate}</p>
              <p>
                 <button className='bg-indigo-900 text-white text-xs rounded mb-0 mt-4 px-6 py-2' onClick={()=>setTransferToDone(task?.id)}>transfer</button>
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/3">
        <div className="bg-green-200 p-4 rounded">
          <h2 className="text-xl font-bold rounded">Done</h2>
          {doneTasks.map((task) => (
            <div key={task.id} className="bg-white p-2 m-2">
              <p>{task.name}</p>
              <p>belong To : {task.project}{"  project"}</p>
              <p>Start Date: {task.startDate}</p>
              <p>End Date: {task.endDate}</p>
              <p><span className='bg-indigo-300 text-white font-serif font-bold text-sm'>pending to approval ....</span></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskBoard;
