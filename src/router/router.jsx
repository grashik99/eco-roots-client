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
import PlantDetails from "../components/PlantDetails";
import UpdatePlant from "../components/UpdatePlant";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayouts,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("http://localhost:3000/plants"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/all-plants",
        Component: AllPlants,
        loader: () => fetch("http://localhost:3000/plants"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "view-details/:id",
        element: (
          <PrivateRoute>
            <PlantDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/plants/${params.id}`),
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
        path: "update-plant/:id",
        element: (
          <PrivateRoute>
            <UpdatePlant />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/plants/${params.id}`),
        hydrateFallbackElement: <Loading />,
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
