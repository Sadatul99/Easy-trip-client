import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import TouristsSpot from "../pages/TouristsSpot";
import AddTouristsSpot from "../pages/AddTouristsSpot";
import MyList from "../pages/MyList"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import UpdateSpot from "../pages/UpdateSpot"

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
            path:"/touristsspot",
            element: <TouristsSpot></TouristsSpot>
        },
        {
            path:"/addtoristsspot",
            element: <AddTouristsSpot></AddTouristsSpot>
        },
        {
            path:"/mylist",
            element: <MyList></MyList>
        },
        {
            path:"/signin",
            element: <SignIn></SignIn>
        },
        {
            path:"/signup",
            element: <SignUp></SignUp>
        },
        {
            path:"/updatespot",
            element: <UpdateSpot></UpdateSpot>
        },
      ]
    },
  ]);

export default router