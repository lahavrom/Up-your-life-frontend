import { Routes, Route } from "react-router-dom";

import { APP_ROUTES } from "../helpers/constants";
import LoginPage from "../pages/login/LoginPage";
import NotFoundPage from "../pages/notFound/NotFoundPage";
import RegisterPage from "../pages/register/RegisterPage";
import LoaderPage from "../pages/loader/LoaderPage";
import UpYourLifePage from "../pages/upYourLife/UpYourLifePage";
import ProtectedRoute from "./ProtectedRoute";

const AppRouter = () => {
	return (
		<Routes>
			<Route path={APP_ROUTES.LOGIN} element={<LoginPage />} />
			<Route path={APP_ROUTES.REGISTER} element={<RegisterPage />} />
			<Route path={APP_ROUTES.LOADING} element={<LoaderPage />} />
			<Route
				index
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
