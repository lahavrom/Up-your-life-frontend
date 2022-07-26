import Sidebar from "./components/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
import Incomes from "./components/incomes/Incomes";
import Expenses from "./components/expenses/Expenses";
import "./App.css";

function App() {
  return (
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
  );
}

export default App;
