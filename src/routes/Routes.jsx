import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
        },
        {
            path:"/about",
            element: <About></About>,
        },
        {
            path:"/career",
            element:<Career></Career>
        }
      ]
    },
  ]);
  export default router;
  