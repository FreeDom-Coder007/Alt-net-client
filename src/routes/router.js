import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../components/Main/Main";
import DetailsPage from "../pages/DetailsPage";
import Login from "../pages/Login";
import Packages from "../pages/Packages";
import ReviewPage from "../pages/ReviewPage";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
       path: '/',
       element: <Main/>,
       children: [
         {
           path: '/',
           element: <Home/> 
         },
         {
          path: '/login',
          element: <Login/>
         },
         {
           path: '/signup',
           element: <SignUp/>
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
    },
    {
      path: '/reviw-page',
      element: <PrivateRoute><ReviewPage/></PrivateRoute> 
    },
    
])

export default router;