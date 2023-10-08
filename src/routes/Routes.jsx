import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Service from "../pages/Service/Service";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader: ()=>fetch('/data.json')
        },
        {
            path:"/about",
            element: <About></About>,
        },
        {
            path:"/career",
            element:<Career></Career>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
            path:"/service/:id",
            element:<PrivateRoute><Service></Service></PrivateRoute>,
            loader: ()=>fetch('/data.json'),
        }
      ]
    },
  ]);
  export default router;
  