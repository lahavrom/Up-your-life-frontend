import { useState, useCallback } from "react";
import { Button } from "monday-ui-react-core";

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
        <div id="dashboard">
          <Dashboard />
          <TransactionLog />
        </div>
        <Button onClick={onOpenModal}>Add income</Button>
        <TransactionFormModal
          type="Expense"
          isOpen={isModalOpen}
          onClose={onCloseModal}
        />
      </div>
    </div>
  );
};

export default UpYourLifePage;
