import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllData } from "../../redux/app/actions/fetchAllData";
import {
	selectIsSuccess,
	selectSuccessMessage,
	selectIsError,
	selectErrorMessage,
} from "../../redux/transactions/selectors";
import TopBar from "../../components/topBar/TopBar";
import BottomBar from "../../components/bottomBar/BottomBar";
import Dashboard from "../../components/Dashboard";
import CalenderContainer from "../../components/calenderContainer/CalenderContainer";
import TransactionLog from "../../components/transactionLog/TransactionLog";
import TransactionFormModal from "../../components/transactionForm/TransactionFormModal";
import SuccessToast from "../../components/toasts/SuccessToast";
import ErrorToast from "../../components/toasts/ErrorToast";
import styles from "./upYourLife.module.css";

const UpYourLifePage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAllData());
	}, [dispatch]);

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
		<div className={styles.container}>
			<SuccessToast isVisible={isSuccess} message={successMessage} />
			<ErrorToast isVisible={isError} message={errorMessage} />
			<TopBar onAddTransaction={onAddTransaction} />
			<div className={styles.contentContainer}>
				<Dashboard />
				<CalenderContainer />
				<TransactionLog onEditTransaction={onEditTransaction} />
			</div>
			<TransactionFormModal
				type={transactionType}
				isEdit={isEdit}
				transactionToEdit={transactionToEdit}
				isOpen={isModalOpen}
				onClose={onCloseModal}
			/>
			<BottomBar />
		</div>
	);
};

export default UpYourLifePage;
