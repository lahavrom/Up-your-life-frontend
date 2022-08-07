import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllData } from "../../redux/app/actions/fetchAllData";
import { selectIsLoading, selectIsReady } from "../../redux/app/selectors";
import {
  selectIsSuccess,
  selectSuccessMessage,
  selectIsError,
  selectErrorMessage,
} from "../../redux/transactions/selectors";
import Loader from "../../components/loader/Loader";
import BottomBar from "../../components/bottomBar/BottomBar";
import TopBar from "../../components/topBar/TopBar";
import Dashboard from "../../components/Dashboard";
import TransactionsCalendar from "../../components/transactionsCalendar/TransactionsCalendar";
import TransactionLog from "../../components/transactionLog/TransactionLog";
import TransactionFormModal from "../../components/transactionForm/TransactionFormModal";
import SuccessToast from "../../components/toasts/SuccessToast";
import ErrorToast from "../../components/toasts/ErrorToast";
import ExpensesPerUser from "../../components/expensesPerUser/ExpensesPerUser";
import styles from "./upYourBizPage.module.css";

const UpYourBizPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch]);

  // app
  const isLoading = useSelector(selectIsLoading);
  const isReady = useSelector(selectIsReady);

  // transactions
  const isSuccess = useSelector(selectIsSuccess);
  const successMessage = useSelector(selectSuccessMessage);
  const isError = useSelector(selectIsError);
  const errorMessage = useSelector(selectErrorMessage);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactionType, setTransactionType] = useState(null);
  const [transactionToEdit, setTransactionToEdit] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  const onOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, [setIsModalOpen]);

  const onCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setIsEdit(false);
  }, [setIsModalOpen]);

  const onAddTransaction = useCallback(
    (type) => {
      setTransactionType(type);
      onOpenModal();
    },
    [setTransactionType, onOpenModal]
  );

  const onEditTransaction = useCallback(
    (transaction) => {
      setTransactionType(transaction.type);
      setIsEdit(true);
      setTransactionToEdit(transaction);
      onOpenModal();
    },
    [onOpenModal]
  );

  return (
    <>
      {isLoading && <Loader />}
      {isReady && (
        <div className={styles.container}>
          <TopBar onAddTransaction={onAddTransaction} />
          <div className={styles.contentContainer}>
            <Dashboard />
            <TransactionsCalendar />
            <TransactionLog onEditTransaction={onEditTransaction} />
            <ExpensesPerUser />
            <BottomBar />
          </div>
          <SuccessToast isVisible={isSuccess} message={successMessage} />
          <ErrorToast isVisible={isError} message={errorMessage} />
          <TransactionFormModal
            type={transactionType}
            isEdit={isEdit}
            transactionToEdit={transactionToEdit}
            isOpen={isModalOpen}
            onClose={onCloseModal}
          />
        </div>
      )}
    </>
  );
};

export default UpYourBizPage;
