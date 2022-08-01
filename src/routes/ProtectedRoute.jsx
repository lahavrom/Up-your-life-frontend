import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { ROUTES } from "./AppRouter";

const ProtectedRoute = ({ children }) => {
  const user = useSelector(({ usersState }) => usersState.user);

  if (!user) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }
  return children;
};

export default ProtectedRoute;
