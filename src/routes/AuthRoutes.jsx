import { Routes, Route } from "react-router-dom";

import LoginPage from "../pages/login/LoginPage";
import RegisterPage from "../pages/register/RegisterPage";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default AuthRoutes;
