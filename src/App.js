import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import AuthRoutes from "./routes/AuthRoutes";
import UpYourLifePage from "./pages/upYourLife/UpYourLifePage";
import { initialize } from "./redux/app/actions/initialize";

const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(({ appState }) => appState.isLoading);
  const isReady = useSelector(({ appState }) => appState.isReady);

  useEffect(() => {
    dispatch(initialize());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : isReady ? (
        <UpYourLifePage />
      ) : (
        <AuthRoutes />
      )}
    </>
  );
};

export default App;
