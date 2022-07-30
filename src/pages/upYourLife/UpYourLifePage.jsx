
import { useState, useCallback } from "react";
import { Button } from "monday-ui-react-core";

import TopBar from "../../components/topBar/TopBar";
import Dashboard from "../../components/Dashboard";
import TransactionLog from "../../components/transactionLog/TransactionLog";
import TransactionFormModal from "../../components/transaction/TransactionFormModal";
import styles from "./upYourLife.module.css";

const UpYourLifePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, [setIsModalOpen]);

  const onCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, [setIsModalOpen]);

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
      <TopBar />
        
          <Dashboard />
          <TransactionLog />
        
        <Button onClick={onOpenModal}>Add income</Button>
      </div>
      <TransactionFormModal
        type="Expense"
        isOpen={isModalOpen}
        onClose={onCloseModal}
      />
    </div>
  );

};

export default UpYourLifePage;
