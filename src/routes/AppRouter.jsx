import { Routes, Route } from "react-router-dom";

import { APP_ROUTES } from "../helpers/constants";
import NotFoundPage from "../pages/notFound/NotFoundPage";
import UpYourBizPage from "../pages/upYourBiz/UpYourBizPage";
import ProtectedRoute from "./ProtectedRoute";
import LandingPage from "../pages/landingPage/LandingPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={APP_ROUTES.LANDING_PAGE} element={<LandingPage />} />
      <Route
        path={APP_ROUTES.UP_YOUR_BIZ}
        element={
          <ProtectedRoute>
            <UpYourBizPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
