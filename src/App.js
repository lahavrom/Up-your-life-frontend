import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectIsError, selectErrorMessage } from "./redux/user/selectors";
import { fetchUser } from "./redux/user/actions/fetchUser";
import { getAuthToken } from "./helpers/authTokenUtils";
import ErrorToast from "./components/toasts/ErrorToast";
import AppRouter from "./routes/AppRouter";

const App = () => {
  const dispatch = useDispatch();

  const isError = useSelector(selectIsError);
  const errorMessage = useSelector(selectErrorMessage);

  useEffect(() => {
    const token = getAuthToken();
    if (token) {
      dispatch(fetchUser());
    }
  }, [dispatch]);

  return (
    <>
      <ErrorToast isVisible={isError} message={errorMessage} />
      <AppRouter />
    </>
  );
};

export default App;
