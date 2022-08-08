import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { selectUser } from "../redux/user/selectors";
import { APP_ROUTES } from "../helpers/constants";

const ProtectedRoute = ({ children }) => {
  const user = useSelector(selectUser);
  if (!user) {
    return <Navigate to={APP_ROUTES.LANDING_PAGE} replace />;
  }
  return children;
};

export default ProtectedRoute;
