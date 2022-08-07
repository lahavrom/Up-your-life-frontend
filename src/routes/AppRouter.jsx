import { Routes, Route } from "react-router-dom";

import { APP_ROUTES } from "../helpers/constants";
import LoginPage from "../pages/login/LoginPage";
import NotFoundPage from "../pages/notFound/NotFoundPage";
import RegisterPage from "../pages/register/RegisterPage";
import UpYourBizPage from "../pages/upYourBiz/UpYourBizPage";
import ProtectedRoute from "./ProtectedRoute";
import AboutComponent from "../pages/about/AboutPage";
import LandingPage from "../pages/landingPage/LandingPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={APP_ROUTES.LANDING_PAGE} element={<LandingPage />} />
      <Route path={APP_ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={APP_ROUTES.REGISTER} element={<RegisterPage />} />
      <Route
        path={APP_ROUTES.UP_YOUR_BIZ}
        element={
          <ProtectedRoute>
            <UpYourBizPage />
          </ProtectedRoute>
        }
      />
      <Route path={APP_ROUTES.ABOUT} element={<AboutComponent />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
