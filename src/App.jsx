import { AllRoutes } from './AllRoutes';
import { Header } from './component/HeaderFile/Header';
import { SideBarTabs } from './component/mainContent/SideBarTabs';

function App() {
 const token=localStorage.getItem('token');
return<>
      { token && (
      <Header />
     )}
      {/* <div className='w-full flex bg-gray-200 '>
              <SideBarTabs/>
          <div className='w-5/6 flex flex-col sh-screen px-4 overflow-scroll space-y-4 mt-[100px]'> */} 
               <AllRoutes/>
          {/* </div> */}
               
      {/* </div>; */}
</>

}

export default App
