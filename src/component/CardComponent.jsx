import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import React from 'react';

 const  CardComponent = ({ text, number, icon, startDate, endDate }) => {
  return (
    <div className=" ml-2 mt-2 bg-white rounded p-4 font-serif">
      <div className="flex items-center">
        <div className="w-3/4">
          <div className="text-xl font-semibold">{text}</div>
          <div className="text-gray-600">Number of Tasks : {number}</div>
          <div className="text-gray-600">
            <span>Start Date: {startDate}</span> - <span className='block'>End Date: {endDate}</span> 
          </div>
        </div>
      </div>
      <div className='flex justify-between space-x-2 text-sm font-serif'>
        <div className='mt-5 text-green-400 font-bold'>
          Owner : Assigned to Ahmedin 
        </div>
        <div><span className='text-green-700 text-2xl'><EditOutlined /></span>
          <span className='text-red-500 text-2xl'><DeleteOutlined /> </span></div>
          
        </div>
    </div>
  );
};

export default CardComponent;
