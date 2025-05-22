import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/Home";
import AddPlant from "../components/AddPlant";
import Register from "../components/Register";
import LogIn from "../components/LogIn";
import MyProfile from "../components/MyProfile";
import PrivateRoute from "../provider/PrivateRoute";
import AllPlants from "../components/AllPlants";
import MyPlants from "../components/MyPlants";
import Loading from "../components/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/all-plants",
        Component: AllPlants,
        loader: () => fetch("http://localhost:3000/plants"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/my-plants",
        element: (
          <PrivateRoute>
            <MyPlants />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:3000/plants"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/add-plants",
        element: (
          <PrivateRoute>
            <AddPlant />
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: LogIn,
      },
      {
        path: "/my-profile",
        Component: MyProfile,
      },
    ],
  },
]);
