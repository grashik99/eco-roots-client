import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/Home";
import AddPlant from "../components/AddPlant";
import Register from "../components/Register";
import LogIn from "../components/LogIn";
import MyProfile from "../components/MyProfile";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayouts,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/add-plants',
        Component: AddPlant
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/login',
        Component: LogIn
      },
      {
        path: '/my-profile',
        Component: MyProfile
      }
    ]
  },
]);
