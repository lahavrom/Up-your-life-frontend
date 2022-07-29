import Dashboard from "../../components/Dashboard";
import TransactionLog from "../../components/transactionLog/TransactionLog";
import styles from "./upYourLife.module.css";

const UpYourLifePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div id="dashboard">
          <Dashboard />
          <TransactionLog />
        </div>
      </div>
    </div>
  );
};

export default UpYourLifePage;
