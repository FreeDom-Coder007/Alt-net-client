import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../components/Main/Main";
import DetailsPage from "../pages/DetailsPage";
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
    },
    {
      path: '/detailspage/:id',
      loader: ({params}) => fetch(`http://localhost:5000/package/${params.id}`),
      element: <DetailsPage/>
    }
    
])

export default router;