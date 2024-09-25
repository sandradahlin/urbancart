import useAuthContext from "../context/AuthProvider/useAuthContext";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoutes() {
  const { isAuthenticated } = useAuthContext();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
