import { Routes, Route } from "react-router-dom";

import LoginPage from "../pages/login/LoginPage";
import NotFoundPage from "../pages/notFound/NotFoundPage";
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
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
