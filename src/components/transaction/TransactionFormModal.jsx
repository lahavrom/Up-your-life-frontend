import { Heading } from "monday-ui-react-core";

import Modal from "../modal/Modal";
import TransactionForm from "./TransactionForm";

const TransactionFormModal = ({ type, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Heading value={`${type} transaction`} type={Heading.types.h4} />
      <TransactionForm type={type} />
    </Modal>
  );
};

export default TransactionFormModal;
