import React from 'react'

function AllTasks() {
    const array=[1,2,3,4,5,6,7,8];
    const columns=['Id','Task Name','start date','end date','Status','assigned person'];
    const Rows=['task 1','sep 2023','oct 2023','Open','ahmedin'];
  return (<>
           <div className=' text-gray-900 text-4xl font-serif m-10'>
                  <div>AllTasks</div>
             </div>

             <table className="flex space-x-10 space-y-10"> 
                <th>Id</th>
                <th>Task Name</th>
                <th>start date</th>
                <th>end date</th>
                <th>Status</th>
                <th>assigned person</th>
             </table>
             {array.map((item,index)=>(
                    <tr className=' flex text-xl text-gray-950 hover:bg-slate-300 space-x-10 space-y-10 items-center'>
                    <td>{index+1}</td>
                    <td>task no 1</td>
                    <td>sep 2023</td>
                    <td>oct 2023</td>
                    <td className='bg-green-3 p-2 rounded '>Open</td>
                    <td>Ahmedin</td>
                  </tr>
             ))}
             
  </>   
    
  )
}

export default AllTasks