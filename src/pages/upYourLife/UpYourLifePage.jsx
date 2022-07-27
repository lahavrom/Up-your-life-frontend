import Sidebar from "../../components/sidebar/Sidebar";
import Dashboard from "../../components/dashboard/Dashboard";
import Incomes from "../../components/incomes/Incomes";
import Expenses from "../../components/expenses/Expenses";
import styles from "./upYourLife.module.css";

const UpYourLifePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Dashboard />
        <Incomes />
        <Expenses />
      </div>
    </div>
  );
};

export default UpYourLifePage;
