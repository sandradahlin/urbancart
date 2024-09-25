import useAuthContext from "../context/AuthProvider/useAuthContext";
import { Outlet, Navigate } from "react-router-dom";

/**
 * Protected routes for authenticated users
 */
export default function PrivateRoutes() {
  const { isAuthenticated } = useAuthContext();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
