import React, { useEffect, useState } from "react";
import styles from "./monthTab.module.scss";
import { Tab, Icon, Button } from "monday-ui-react-core";
import {
	NavigationChevronLeft,
	NavigationChevronRight,
	Add,
} from "monday-ui-react-core/dist/allIcons";

const MonthTab = () => {
	const date = new Date();
	const month = date.getMonth();
	const options = { month: "long", year: "numeric" };
	let currentMonth = new Intl.DateTimeFormat("en-US", options).format(date);
	const [monthNow, setMonthNow] = useState(currentMonth);

	function handleClick() {
		setMonthNow(month + 1);
	}
	function handleClickRight() {
		setMonthNow(date.getMonth() - 1);
	}

	const monthList = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	// const [progress, setProgress] = useState(0);

	// useEffect(() => {
	//
	// }, []);elect-month-with-tab-keyelect-month-with-tab-key
	// const IncomeExpenseCard = ({
	// 	flowType,
	// 	setModalVisible,
	// 	setAddType,
	// 	setFixed,
	// }) => {
	// 	const handleAdd = (fixed) => {
	// 		setModalVisible(true);
	// 		setAddType(flowType);
	// 		fixed ? setFixed(true) : setFixed(false);
	// 	};

	return (
		<div className={styles.monthTab}>
			<Icon
				iconType={Icon.type.SVG}
				icon={NavigationChevronLeft}
				iconLabel="arrowLeft"
				iconSize={20}
				onClick={handleClick}
			/>
			<Tab className={styles.nextTab}>{currentMonth}</Tab>
			<Tab className={styles.currentTab} active>
				{currentMonth}
			</Tab>
			<Tab className={styles.nextTab}>{currentMonth}</Tab>
			<Icon
				iconType={Icon.type.SVG}
				icon={NavigationChevronRight}
				iconLabel="arrowRight"
				iconSize={20}
				onClick={handleClickRight}
			/>
			<Button
				className={styles.addBtn}
				// onClick={() => handleAdd(false)}
			>
				<Add />
			</Button>
		</div>
	);
};

export default MonthTab;
