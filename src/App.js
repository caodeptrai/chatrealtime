import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
// import Home from "./pages/Home/Home";
// import Profile from './pages/Profile/Profile';
import "./style.scss";
import 'antd/dist/antd.min.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {useContext} from 'react';
import { AuthContext } from "./context/AuthContext";
import { publicRoutes } from './routes/routes';
import MasterLayout from './layouts/MasterLayout/MasterLayout';

function App() {

  const {currentUser} = useContext(AuthContext);
  
  const ProtectedRoute = ({children})=> {
    if(!currentUser) {
      return (<Navigate to="/login"/>)
    }

    return children
  };
 
  
  return (
    
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route,index) => {
          const Page = route.component;
          let Layout = MasterLayout;

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <ProtectedRoute>
                  <Layout>
                    <Page/>
                  </Layout>
                </ProtectedRoute>
                
              }>
            
              </Route>   
          );
        })}
        <Route path="login" element={<Login/>}></Route>
        <Route path="register" element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
