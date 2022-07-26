import { DialogContentContainer } from "monday-ui-react-core";

import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import CompareExpenesIncomes from "./Components/compareExpensesIncomes/CompareExpensesIncome";
import ChartAllExpenses from "./Components/chart-all-expenses/Chart-all-expenses";
import BarGoal from "./Components/barGoal/BarGoal";
import "./App.css";

function App() {
  return (
    <>
      <Header></Header>
      <div className="main">
        <Sidebar />
        <div className="content">
          <DialogContentContainer className="container">
            <CompareExpenesIncomes />
            <ChartAllExpenses />
          </DialogContentContainer>
          <DialogContentContainer className="container container2">
            <BarGoal />
            <div>detailed expesnes</div>
          </DialogContentContainer>
        </div>
      </div>
    </>
  );
}

export default App;
