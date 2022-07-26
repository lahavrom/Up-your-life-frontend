import { DialogContentContainer } from "monday-ui-react-core";

import Sidebar from "./components/Sidebar";
import CompareExpenesIncomes from "./components/compareExpensesIncomes/CompareExpensesIncome";
import ChartAllExpenses from "./components/chart-all-expenses/Chart-all-expenses";
import BarGoal from "./components/barGoal/BarGoal";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <DialogContentContainer className="dialog-content-container">
          <CompareExpenesIncomes />
        </DialogContentContainer>
        <DialogContentContainer>
          <ChartAllExpenses />
        </DialogContentContainer>
        <DialogContentContainer>
          <BarGoal />
        </DialogContentContainer>
      </div>
    </div>
  );
}

export default App;
