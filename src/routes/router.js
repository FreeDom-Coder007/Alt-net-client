import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../components/Main/Main";
import Packages from "../pages/Packages";

const router = createBrowserRouter([
    {
       path: '/',
       element: <Main/>,
       children: [
         {
           path: '/',
           element: <Home/> 
         }
       ] 
    },
    {
      path: '/packages',
      element: <Packages/>
    }
    
])

export default router;