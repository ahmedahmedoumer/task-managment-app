import { AlertOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import Profile from "./Profile";
import React, { useState } from "react";

   export default function NavComponent({}) {
      const [isOpen,setIsOpen]=useState(false);
      const fname=localStorage.getItem('firstName');
      const lname=localStorage.getItem('lastName');
      return (
         <div>
            <nav className='flex space-x-5 justify-between text-lg font-serif font-bold'>
                           <div className="flex">

                              <a href="#" className="absolute px-2"><SearchOutlined/></a>
                              <span><input type="text" name="" id="" className="py-1 px-8 rounded border boredr-gray-100" /></span>
                              </div>
                              <div className="flex space-x-2 items-center">
                                 <div className="flex  mr-5 space-x-2 items-center">
                                    <span className="absolute text-black text-3xl "><AlertOutlined/></span>
                                    <span className="relative bg-red-500 text-xs rounded items-center p-0.5 px-1 text-white mb-4 ml-2">3</span>
                                 </div>
                              
                              <div className="flex space-x-2 items-center cursor-pointer" onClick={()=>setIsOpen(!isOpen)}>
                                 <span className="rounded" ><UserOutlined /></span>
                                 <span className="text-gray-800 text-sm mt-2"></span>
                                 {isOpen && <Profile/>}
                              </div>
                            
                              
                              </div>
                     </nav>

         </div>
           
                 );
    }
  
  