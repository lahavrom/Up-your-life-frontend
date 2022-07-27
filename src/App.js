import { useSelector } from "react-redux";

import AuthRoutes from "./routes/AuthRoutes";
import UpYourLifePage from "./pages/upYourLife/UpYourLifePage";

const App = () => {
  const user = useSelector(({ usersState }) => usersState.user);

  return <>{!user ? <AuthRoutes /> : <UpYourLifePage />}</>;
};

export default App;
