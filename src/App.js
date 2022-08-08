import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchUser } from "./redux/user/actions/fetchUser";
import { getAuthToken } from "./helpers/authTokenUtils";
import AppRouter from "./routes/AppRouter";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getAuthToken();
    if (token) {
      dispatch(fetchUser());
    }
  }, [dispatch]);

  return <AppRouter />;
};

export default App;
