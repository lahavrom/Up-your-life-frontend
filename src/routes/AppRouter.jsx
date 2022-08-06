import { Routes, Route } from "react-router-dom";

import { APP_ROUTES } from "../helpers/constants";
import LoginPage from "../pages/login/LoginPage";
import NotFoundPage from "../pages/notFound/NotFoundPage";
import RegisterPage from "../pages/register/RegisterPage";
import UpYourLifePage from "../pages/upYourBiz/UpYourLifeBiz";
import ProtectedRoute from "./ProtectedRoute";
import AboutComponent from "../components/aboutComponent/AboutComponent";

const AppRouter = () => {
	return (
		<Routes>
			<Route path={APP_ROUTES.LOGIN} element={<LoginPage />} />
			<Route path={APP_ROUTES.REGISTER} element={<RegisterPage />} />
			<Route
				index
				element={
					<ProtectedRoute>
						<UpYourLifePage />
					</ProtectedRoute>
				}
			/>
			<Route path="*" element={<NotFoundPage />} />
			<Route path={APP_ROUTES.ABOUT} element={<AboutComponent />} />
		</Routes>
	);
};

export default AppRouter;
