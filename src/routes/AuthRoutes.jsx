import { Routes, Route } from "react-router-dom";

import LoginPage from "../pages/login/LoginPage";
import RegisterPage from "../pages/register/RegisterPage";

export const AUTH_ROUTES = {
  LOGIN: "/",
  REGISTER: "/register",
};

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path={AUTH_ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={AUTH_ROUTES.REGISTER} element={<RegisterPage />} />
    </Routes>
  );
};

export default AuthRoutes;
