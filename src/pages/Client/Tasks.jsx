import React from 'react'
import { useDrag, useDrop } from 'react-dnd';

function Tasks({task,bgColor,text,onDrop}) {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'div',
        item: { task: task },
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      }));
    
      const [, drop] = useDrop({
        accept: 'div',
        drop: (droppedImage) => onDrop(droppedImage),
      });

  return (
         <div
        ref={(node) => drag(drop(node))}
        style={{
          opacity: isDragging ? 0.01 : 1,
          bgColor: isDragging ? "blue":"white",
          cursor: 'grab',
        }}
      >
           <div key={task.id} className="bg-white p-2 m-2 rounded font-serif">
                <p className="font-bold">{task.name}</p>
                <p>belongs To : {task?.project?.name}</p>
                <p>Start Date: {task?.startDate}</p>
                <p>End Date: {task?.endDate}</p>
                <p>
                    {/* <button className={`${bgColor} text-white text-xs rounded mb-0 mt-4 px-6 py-2`}  onClick={()=>onDrop(task?.id)}>{text}</button> */}
                </p>
            </div>
      </div>
          
  )
}

export default Tasks;