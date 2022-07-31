import { Routes, Route } from "react-router-dom";

import LoginPage from "../pages/login/LoginPage";
import RegisterPage from "../pages/register/RegisterPage";
import UpYourLifePage from "../pages/upYourLife/UpYourLifePage";
import ProtectedRoute from "./ProtectedRoute";

export const ROUTES = {
  LOGIN: "/login",
  REGISTER: "/register",
  UP_YOUR_LIFE: "/up-your-life",
};

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route
        path={ROUTES.UP_YOUR_LIFE}
        element={
          <ProtectedRoute>
            <UpYourLifePage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
};

export default AppRouter;
