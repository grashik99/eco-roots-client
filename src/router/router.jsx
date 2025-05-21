import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/Home";
import AddPlant from "../components/AddPlant";


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
      }
    ]
  },
]);
