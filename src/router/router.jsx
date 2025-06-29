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
import Error from "../pages/Error";
import Deshboard from "../components/Deshboard";
import AboutUs from "../components/AboutUs";
import Support from "../components/Support";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayouts,
    errorElement: <Error />,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("https://eco-roots-server.vercel.app/plants"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/all-plants",
        Component: AllPlants,
        loader: () => fetch("https://eco-roots-server.vercel.app/plants"),
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
          fetch(`https://eco-roots-server.vercel.app/plants/${params.id}`),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "update-plant/:id",
        element: (
          <PrivateRoute>
            <UpdatePlant />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://eco-roots-server.vercel.app/plants/${params.id}`),
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
        path: "/aboutUs",
        Component: AboutUs,
      },
      {
        path: "/support",
        Component: Support,
      },
    ],
  },
  {
    path: "/deshboard",
    element: (
      <PrivateRoute>
        <Deshboard></Deshboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/deshboard/my-plants",
        element: (
          <PrivateRoute>
            <MyPlants />
          </PrivateRoute>
        ),
        loader: () => fetch("https://eco-roots-server.vercel.app/plants"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/deshboard/add-plant",
        element: (
          <PrivateRoute>
            <AddPlant />
          </PrivateRoute>
        ),
      },

      {
        path: "/deshboard/",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/deshboard/myProfile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
