import { DialogContentContainer, Divider } from "monday-ui-react-core";
import "monday-ui-react-core/dist/main.css";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import CompareExpenesIncomes from "./Components/compare-expenses-incomes-component/Compare-expenses-income-comconent";

function App() {
  return (
    <>
      <Header></Header>
      <div className="main">
        <Sidebar />
        <div className="content">
          <DialogContentContainer className="container">
				<CompareExpenesIncomes />
            <div>pie chart of expenses</div>
          </DialogContentContainer>
          <DialogContentContainer className="container container2">
            <div>progrees bar to goals</div>
            <div>detailed expesnes</div>
          </DialogContentContainer>
        </div>
      </div>
    </>
  );
}

export default App;
