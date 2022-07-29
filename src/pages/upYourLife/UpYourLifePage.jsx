import Sidebar from "../../components/sidebar/Sidebar";
import Dashboard from "../../components/Dashboard";
import styles from "./upYourLife.module.css";

const UpYourLifePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebarContainer}>
        <Sidebar />
      </div>
      <div className={styles.contentContainer}>
        <div id="dashboard">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default UpYourLifePage;
