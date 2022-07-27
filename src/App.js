import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
import IncomeExpenseCard from "./components/incomeExpenseCard/IncomeExpenseCard";
import "./App.css";
import { useState } from "react";
import NewAddition from "./components/NewAddition/NewAddition";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [addType, setAddType] = useState("");
  const [fixed, setFixed] = useState();

  return (
    <>
      <div className="container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <Dashboard />
          <IncomeExpenseCard
            flowType={"Incomes"}
            setModalVisible={setModalVisible}
            setAddType={setAddType}
            setFixed={setFixed}
          />
          <IncomeExpenseCard
            flowType={"Expenses"}
            setModalVisible={setModalVisible}
            setAddType={setAddType}
            setFixed={setFixed}
          />
        </div>
      </div>
      <NewAddition
        addType={addType}
        fixed={fixed}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
}
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
