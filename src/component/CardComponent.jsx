import React from 'react';

 const  CardComponent = ({ text, number, icon, startDate, endDate }) => {
  return (
    <div className=" ml-2 mt-2 bg-white rounded p-4">
      <div className="flex items-center">
        <div className="w-1/4">
          <div className="text-3xl text-blue-500">
            {icon}
          </div>
        </div>
        <div className="w-3/4">
          <div className="text-xl font-semibold">{text}</div>
          <div className="text-gray-600">{number}</div>
          <div className="text-gray-600">
            Start Date: {startDate} - End Date: {endDate}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
