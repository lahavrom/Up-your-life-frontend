import { useState, useCallback } from "react";
import { useSelector } from "react-redux";

import TopBar from "../../components/topBar/TopBar";
import Dashboard from "../../components/Dashboard";
import TransactionLog from "../../components/transactionLog/TransactionLog";
import TransactionFormModal from "../../components/transaction/TransactionFormModal";
import SuccessToast from "../../components/toasts/SuccessToast";
import ErrorToast from "../../components/toasts/ErrorToast";
import styles from "./upYourLife.module.css";

const UpYourLifePage = () => {
  const isSuccess = useSelector(
    ({ transactionsState }) => transactionsState.isSuccess
  );
  const successMessage = useSelector(
    ({ transactionsState }) => transactionsState.successMessage
  );
  const isError = useSelector(
    ({ transactionsState }) => transactionsState.isError
  );
  const errorMessage = useSelector(
    ({ transactionsState }) => transactionsState.errorMessage
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactionType, setTransactionType] = useState(null);

  const onOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, [setIsModalOpen]);

  const onCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, [setIsModalOpen]);

  const onAddTransaction = useCallback(
    (type) => {
      setTransactionType(type);
      onOpenModal();
    },
    [setTransactionType, onOpenModal]
  );

  return (
    <div className={styles.container}>
      <SuccessToast isVisible={isSuccess} message={successMessage} />
      <ErrorToast isVisible={isError} message={errorMessage} />
      <TopBar onAddTransaction={onAddTransaction} />
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
