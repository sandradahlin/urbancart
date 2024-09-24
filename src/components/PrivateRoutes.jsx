import useAuthContext from "../context/useAuthContext";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoutes() {
  const { isAuthenticated } = useAuthContext();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
