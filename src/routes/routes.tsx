import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DashboardLayout from "../components/layout/DashboardLayout";
import Donations from "../pages/Donations";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SingleDonationPage from "../pages/SingleDonationPage";
import Dashboard from "../pages/dashboard/Dashboard";
import AllDonationsPost from "../pages/dashboard/AllDonationsPost";
import CreateDonationPost from "../pages/dashboard/CreateDonationPost";
import ProtectedRoute from "../components/layout/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/donations",
        element: <Donations />,
      },
      {
        path: "/donations/:id",
        element: <SingleDonationPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/dashboard/donations",
        element: <AllDonationsPost />,
      },
      {
        path: "/dashboard/create-donation",
        element: <CreateDonationPost />,
      },
    ],
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
