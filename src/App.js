import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import AuthRoutes from "./routes/AuthRoutes";
import UpYourLifePage from "./pages/upYourLife/UpYourLifePage";
import { fetchUser } from "./redux/users/actions/fetchUser";
import { STORAGE_KEYS } from "./helpers/constants";

const token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);

const App = () => {
  const dispatch = useDispatch();

  const user = useSelector(({ usersState }) => usersState.user);

  useEffect(() => {
    if (!token) {
      return;
    }
    dispatch(fetchUser());
  }, [dispatch]);

  return <>{user ? <UpYourLifePage /> : <AuthRoutes />}</>;
};

export default App;
