import { AllRoutes } from './AllRoutes';
import { Header } from './component/HeaderFile/Header';
import { SideBarTabs } from './component/mainContent/SideBarTabs';

function App() {
 const token=localStorage.getItem('token');
return<>
      { token!==null && (
      <Header />
     )}
     <AllRoutes/>
</>

}

export default App
