import { useState, useCallback } from "react";

import TopBar from "../../components/topBar/TopBar";
import Dashboard from "../../components/Dashboard";
import TransactionLog from "../../components/transactionLog/TransactionLog";
import TransactionFormModal from "../../components/transaction/TransactionFormModal";
import styles from "./upYourLife.module.css";

const UpYourLifePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactionType, setTransactionType] = useState(null);

  const onOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, [setIsModalOpen]);

  const onCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, [setIsModalOpen]);

  const handleAddTransaction = useCallback(
    (type) => {
      setTransactionType(type);
      onOpenModal();
    },
    [setTransactionType, onOpenModal]
  );

  return (
    <div className={styles.container}>
      <TopBar onAddTransaction={handleAddTransaction} />
      <div className={styles.contentContainer}>
        <Dashboard />
        <TransactionLog />
      </div>
      <TransactionFormModal
        type={transactionType}
        isOpen={isModalOpen}
        onClose={onCloseModal}
      />
    </div>
  );
};

export default UpYourLifePage;
