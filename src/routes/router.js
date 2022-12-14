import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from "../components/Main/Main";
import AddPackage from "../pages/AddPackage";
import Blog from "../pages/Blog";
import DetailsPage from "../pages/DetailsPage";
import Login from "../pages/Login";
import MyReviews from "../pages/MyReviews";
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
      loader: ({params}) => fetch(`https://alt-net-provider-server.vercel.app/${params.id}`),
      element: <DetailsPage/>
    },
    {
      path: '/reviw-page',
      element: <PrivateRoute><ReviewPage/></PrivateRoute> 
    },
    {
      path: '/my_reviews/:id',
      loader: ({params}) => fetch(`https://alt-net-provider-server.vercel.app/reviews/${params.id}`),
      element: <MyReviews/>
    },
    {
      path: '/add-packages',
      element: <AddPackage/>
    },
    {
      path: '/blog',
      element: <Blog/>
    }  
])

export default router;