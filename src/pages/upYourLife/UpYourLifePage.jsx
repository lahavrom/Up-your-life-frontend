import { useState } from "react";

import Sidebar from "../../components/sidebar/Sidebar";
import Dashboard from "../../components/dashboard/Dashboard";
import IncomeExpenseCard from "../../components/incomeExpenseCard/IncomeExpenseCard";
import NewAddition from "../../components/NewAddition/NewAddition";
import styles from "./upYourLife.module.css";

const UpYourLifePage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [addType, setAddType] = useState("");
  const [fixed, setFixed] = useState();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.content}>
          <Dashboard />
          <IncomeExpenseCard
            flowType={"Incomes"}
            setModalVisible={setModalVisible}
            setAddType={setAddType}
            setFixed={setFixed}
          />
          <IncomeExpenseCard
            flowType={"Expenses"}
            setModalVisible={setModalVisible}
            setAddType={setAddType}
            setFixed={setFixed}
          />
        </div>
      </div>
      <NewAddition
        addType={addType}
        fixed={fixed}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
};

export default UpYourLifePage;
