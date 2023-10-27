import React from "react";
import Projects from "./pages/projects/Projects";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SidebarContent  from "./component/mainContent/SidebarContent";
import AllTasks from "./pages/AllTasks/AllTasks";
export function AllRoutes() {
  return <BrowserRouter>
       <Routes>
          <Route path='/' element={<SidebarContent />}/>
               <Route path='dashboard' element={<SidebarContent />}/>
               <Route path="projects" element={<Projects/>} />
               <Route path='tasks' element={<SidebarContent />} />
               <Route path='user-managment' element={<SidebarContent />} />
               <Route path='setting' element={<SidebarContent />} />
               <Route path='about' element={<SidebarContent />} />
        
       </Routes>
    </BrowserRouter>;
}
  