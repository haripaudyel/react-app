import { createBrowserRouter, Navigate } from "react-router-dom";
import GuestLayout from "../components/GuestLayout";
import MasterLayout from "../components/MasterLayout";
import Dashboard from "../views/Dashboard";
import Login from "../views/Login";
import NotFound from "../views/NotFound";
import Signup from "../views/Signup";
import User from "../views/User";

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/",
    element: <MasterLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/user" />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
export default router;
