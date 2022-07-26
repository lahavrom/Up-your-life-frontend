import Sidebar from "./components/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
import Incomes from "./components/incomes/Incomes";
import Expenses from "./components/expenses/Expenses";
import "./App.css";
import { useState } from "react";
import NewAddition from "./Components/NewAddition/NewAddition";

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [addType, setAddType] = useState("");

  return (
    <>
    <div className="container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <Dashboard />
        <Incomes />
        <Expenses />
      </div>
    </div>
      <NewAddition
        type={addType}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
}

export default App;
