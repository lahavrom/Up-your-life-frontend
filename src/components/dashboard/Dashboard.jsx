import { DialogContentContainer } from "monday-ui-react-core";

import CompareExpensesIncome from "../compareExpensesIncomes/CompareExpensesIncome";
import ChartAllExpenses from "../chartAllExpenses/ChartAllExpenses";
import styles from "./dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.cardContentContainer}>
      <DialogContentContainer className={styles.cardStartContentContainer}>
        <CompareExpensesIncome />
      </DialogContentContainer>
      <DialogContentContainer className={styles.cardEndContentContainer}>
        <ChartAllExpenses />
      </DialogContentContainer>
    </div>
  );
};

export default Dashboard;
