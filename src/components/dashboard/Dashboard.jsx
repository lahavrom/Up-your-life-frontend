import { DialogContentContainer, Heading } from "monday-ui-react-core";

import CompareExpensesIncome from "../compareExpensesIncomes/CompareExpensesIncome";
import ChartAllExpenses from "../chartAllExpenses/ChartAllExpenses";
import styles from "./dashboard.module.css";

const Dashboard = () => {
  return (
    <>
      <Heading id="dashboard" value="Dashboard" type={Heading.types.h2} />
      <div className={styles.cardContentContainer}>
        <DialogContentContainer className={styles.cardStartContentContainer}>
          <CompareExpensesIncome />
        </DialogContentContainer>
        <DialogContentContainer className={styles.cardEndContentContainer}>
          <ChartAllExpenses />
        </DialogContentContainer>
      </div>
    </>
  );
};

export default Dashboard;
