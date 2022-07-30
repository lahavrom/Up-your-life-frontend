import { useState } from "react";

import {
	Tab,
	Icon,
	MenuButton,
	Menu,
	MenuItem,
	Flex,
} from "monday-ui-react-core";
import {
	NavigationChevronLeft,
	NavigationChevronRight,
	Download,
	Upload,
	Add,
} from "monday-ui-react-core/dist/allIcons";
import logo from "../../../src/assets/logo4.png";

import styles from "./topBar.module.css";

const months = [
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

const TopBar = () => {
	const currentMonth = new Date().getMonth();
	const [monthSelected, setMonthSelected] = useState(currentMonth);

	const handleAssigneeOnClickRight = () => {
		setMonthSelected((prev) => {
			if (prev === months.length - 1) {
				return 0;
			} else {
				return prev + 1;
			}
		});
	};
	const handleAssigneeOnClickLeft = () => {
		setMonthSelected((prev) => {
			if (prev > 0) {
				return prev - 1;
			}
		});
	};

	return (
		<Flex
			justify={Flex.justify.CENTER}
			gap={Flex.gaps.LARGE}
			className={styles.topBar}
		>
			<img src={logo} alt="Logo" className={styles.logo} />
			<Icon
				iconType={Icon.type.SVG}
				icon={NavigationChevronLeft}
				iconLabel="arrowLeft"
				iconSize={20}
				onClick={handleAssigneeOnClickLeft}
			/>
			<Tab>{`${months[monthSelected]} 2022`}</Tab>

			<Icon
				iconType={Icon.type.SVG}
				icon={NavigationChevronRight}
				iconLabel="arrowRight"
				iconSize={20}
				onClick={handleAssigneeOnClickRight}
			/>
			<MenuButton component={Add}>
				<Menu id="menu" size={Menu.sizes.MEDIUM}>
					<MenuItem
						icon={Download}
						iconType={MenuItem.iconType.SVG}
						title="Income"
					/>
					<MenuItem
						icon={Upload}
						iconType={MenuItem.iconType.SVG}
						title="Expense"
					/>
				</Menu>
			</MenuButton>
		</Flex>
	);
};

export default TopBar;
