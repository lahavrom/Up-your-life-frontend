import { useDispatch, useSelector } from "react-redux";

import { getAuthToken } from "./helpers/authTokenUtils";
import { fetchUser } from "./redux/users/actions/fetchUser";
import AppRouter from "./routes/AppRouter";
import ErrorToast from "./components/toasts/ErrorToast";

const token = getAuthToken();

const App = () => {
  const dispatch = useDispatch();

  const isError = useSelector(({ usersState }) => usersState.isError);
  const errorMessage = useSelector(({ usersState }) => usersState.errorMessage);

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
