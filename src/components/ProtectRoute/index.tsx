import { useAuthStore } from "@store/AuthStore";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: any) => {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default ProtectedRoute;
