import { useDispatch, useSelector } from "react-redux";

import { getAuthToken } from "./helpers/authTokenUtils";
import { fetchUser } from "./redux/user/actions/fetchUser";
import AppRouter from "./routes/AppRouter";
import ErrorToast from "./components/toasts/ErrorToast";

const token = getAuthToken();

const App = () => {
  const dispatch = useDispatch();

  const isError = useSelector(({ userState }) => userState.isError);
  const errorMessage = useSelector(({ userState }) => userState.errorMessage);

  if (token) {
    dispatch(fetchUser());
  }

  return (
    <>
      <ErrorToast isVisible={isError} message={errorMessage} />
      <AppRouter />
    </>
  );
};

export default App;
