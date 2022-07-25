import { DialogContentContainer, Divider } from "monday-ui-react-core";
import "monday-ui-react-core/dist/main.css";
import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import CompareExpenesIncomes from "./Components/compare-expenses-incomes-component/Compare-expenses-income-comconent";
import { useEffect } from "react";
import RegisterPage from "./pages/register/RegisterPage";
import LoginPage from "./pages/login/LoginPage";
import ChartAllExpenses from "./Components/chart-all-expenses/Chart-all-expenses";

import { useDispatch } from "react-redux";
import { fetchAllFixedEvents } from "./redux/fixedEvents/actions/fetchAllFixedEvents";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllFixedEvents("5"));
  }, [dispatch]);

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
				<div>progrees bar to goals</div>
				<div>detailed expesnes</div>
			</DialogContentContainer>
        </div>
      </div>
      <RegisterPage />
    </>
  );
}

export default App;
