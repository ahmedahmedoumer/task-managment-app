import { AllRoutes } from './AllRoutes';
import { Header } from './component/HeaderFile/Header';
import { ClientRoutes } from './ClientRoutes';
// import { SideBarTabs } from './component/mainContent/SideBarTabs';

function App() {
      const userType=localStorage.getItem('userType');
 const token=localStorage.getItem('token');
return<>
            { token!==null && (
                 <Header />
            )}
            { userType =='Admin' ?  <AllRoutes/> : <ClientRoutes/> }
      </>
}
export default App
