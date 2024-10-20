import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import TouristsSpots from "../pages/TouristsSpots";
import AddTouristsSpot from "../pages/AddTouristsSpot";
import MyList from "../pages/MyList"
import SignIn from "../pages/SignIn"
import SignUp from "../pages/SignUp"
import UpdateSpot from "../pages/UpdateSpot"
import SpotDetails from "../pages/SpotDetails";
import PrivateRoute from "./PrivateRoute";

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
            path:"/tourists-spots",
            element: <TouristsSpots></TouristsSpots>,
            loader: ()=> fetch('http://localhost:5000/tourists-spots')
        },
        {
            path:"/tourists-spots/:id",
            element: <SpotDetails></SpotDetails>,
            loader :({params})=> fetch(`http://localhost:5000/tourists-spots/${params.id}`)
        },
        {
            path:"/add-torists-spot",
            element: <PrivateRoute><AddTouristsSpot></AddTouristsSpot></PrivateRoute>
        },
        {
            path:"/my-list",
            element: <PrivateRoute><MyList></MyList></PrivateRoute>,
            loader: ()=> fetch('http://localhost:5000/tourists-spots')
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
            path:"/updatespot/:id",
            element: <UpdateSpot></UpdateSpot>,
            loader :({params})=> fetch(`http://localhost:5000/tourists-spots/${params.id}`)
        },
      ]
    },
  ]);

export default router