import { BASE_ROUTE, LOGIN_ROUTE } from "@/router/routes";
import { Navigate, Outlet } from "react-router-dom";
import { ACCESS_TOKEN_KEY } from "@/lib/constants";

export default function PrivateRoute() {
  const isAuthenticated = !!localStorage.getItem(ACCESS_TOKEN_KEY);
    
  return isAuthenticated ? <Outlet /> : <Navigate to={LOGIN_ROUTE} />;
}

PrivateRoute.path = BASE_ROUTE;
