import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
import IncomeExpenseCard from "./components/incomeExpenseCard/IncomeExpenseCard";
import "./App.css";
import { useState } from "react";
import NewAddition from "./components/NewAddition/NewAddition";
import { useSelector } from "react-redux";

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

const App = () => {
  const user = useSelector(({ usersState }) => usersState.user);

  return <>{!user ? <AuthRoutes /> : <UpYourLifePage />}</>;
};

export default App;
