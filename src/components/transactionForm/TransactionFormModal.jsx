import { Heading } from "monday-ui-react-core";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import styles from "./transactionFormModal.module.css";
import AppModal from "../modal/AppModal";
import TransactionForm from "./TransactionForm";

const TransactionFormModal = ({
  type,
  isEdit,
  transactionToEdit,
  isOpen,
  onClose,
}) => {
  const isSuccess = useSelector(
    ({ transactionsState }) => transactionsState.isSuccess
  );

  useEffect(() => {
    if (isSuccess) {
      onClose();
    }
  }, [isSuccess, onClose]);

  return (
    <AppModal isOpen={isOpen} onClose={onClose}>
      <Heading
        value={`${type} transaction`}
        type={Heading.types.h4}
        className={styles.formHeader}
      />
      <TransactionForm
        type={type}
        isEdit={isEdit}
        transactionToEdit={transactionToEdit}
      />
    </AppModal>
  );
};

export default TransactionFormModal;
