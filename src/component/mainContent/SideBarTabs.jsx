import React, { useState } from "react";
import { BarChartOutlined, DownOutlined, InfoCircleOutlined, ProjectOutlined, SettingOutlined,UsergroupDeleteOutlined, WindowsOutlined } from "@ant-design/icons";
import { DropDownFile } from "../DropDownFile";
import { Link } from 'react-router-dom';


export function SideBarTabs({}) {
const [isDropDownOpen,setIsDropDownOpen]=useState(false);

  return <div className='w-1/6 py-4 rounded  pl-10 text-lg font-semibold bg-gradient-to-br from-gray-700 cursor-pointer to-gray-900 h-auto md:h-screen capitalize text-white font-serif'>
             <div className='flex flex-col space-y-8 mt-20 fixed'>
             <a href="/dashboard" className='flex  space-x-2 items-center '><span><WindowsOutlined /></span> <span>dashboard</span></a>
             <div className='grid  space-x-1 items-center' onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
                   <div className='flex space-x-2 hover:bg-gray-700 rounded'>
                    <span><UsergroupDeleteOutlined className="text-xl"/></span><span>User managment</span><span><DownOutlined className='text-sm' /></span></div> 
                     {isDropDownOpen && <DropDownFile />}</div>
             <div className='flex  space-x-2 items-center'> 
                    {/* <Link to="/dashboard">Go to About</Link> */}
                    <a href="/projects"><span><ProjectOutlined /></span> <span>Projects</span></a>
             </div>
             <a href="/tasks" className='flex  space-x-2 items-center'><span><BarChartOutlined /></span> <span>Tasks</span></a>
             <a href="/setting" className='flex  space-x-2 items-center'><span><SettingOutlined /></span> <span>Setting</span></a>
             <a href="/about" className='flex  space-x-2 items-center'><span><InfoCircleOutlined /></span> <span>About</span></a>
             </div>
          </div>;
}
  