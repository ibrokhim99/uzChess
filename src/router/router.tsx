import DashboardLayout from "@/components/layouts/dashboard-layout";
import PrivateRoute from "@/components/middlewares/private-route";
import CouresePage from "@/pages/courses-page";
import DashboardPage from "@/pages/dashboard-page";
import LoginPage from "@/pages/login-page";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <PrivateRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          {
            path: DashboardPage.path,
            element: <DashboardPage />,
          },
          {
            path: CouresePage.path,
            element:<CouresePage/>
          },
        ],
      },
    ],
  },
  {
    path: LoginPage.path,
    element: <LoginPage />,
  },
]);
