import { Heading } from "monday-ui-react-core";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import Modal from "../modal/Modal";
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
    <Modal isOpen={isOpen} onClose={onClose}>
      <Heading value={`${type} transaction`} type={Heading.types.h4} />
      <TransactionForm
        type={type}
        isEdit={isEdit}
        transactionToEdit={transactionToEdit}
      />
    </Modal>
  );
};

export default TransactionFormModal;
