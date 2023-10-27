import { SideBarTabs } from './SideBarTabs';
import { SidebarContent } from './SidebarContent';
import React, { useState } from "react";
export function MainContent({}) {
    const array=[1,2,3,4];

  return 
        <div className='w-full flex bg-gray-200 '>
        <SideBarTabs   setIsDropDownOpen={setIsDropDownOpen} isDropDownOpen={isDropDownOpen}  />
          
          <SidebarContent item={array}/>

        </div>;
}
  