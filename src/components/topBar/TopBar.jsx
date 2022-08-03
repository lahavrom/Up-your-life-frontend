import { useDispatch, useSelector } from "react-redux";
import {
	Tab,
	Icon,
	MenuButton,
	Menu,
	MenuItem,
	Heading,
	IconButton,
} from "monday-ui-react-core";
import {
	NavigationChevronLeft,
	NavigationChevronRight,
	Download,
	Upload,
	Add,
	Person,
} from "monday-ui-react-core/dist/allIcons";

import { changeMonth } from "../../redux/date/actions/changeMonth";
import logo from "../../../src/assets/up_logo.png";
import { MONTHS } from "../../helpers/constants";
import "./topBar.css";
import styles from "./topBar.module.css";

const TopBar = ({ onAddTransaction }) => {
	const dispatch = useDispatch();

	const selectedMonth = useSelector(({ dateState }) => dateState.month);

	const handleAssigneeOnClickRight = () => {
		const newMonth =
			selectedMonth === MONTHS.length - 1 ? selectedMonth : selectedMonth + 1;
		dispatch(changeMonth(newMonth));
	};

	const handleAssigneeOnClickLeft = () => {
		const newMonth = selectedMonth > 0 ? selectedMonth - 1 : 0;
		dispatch(changeMonth(newMonth));
	};
	return (
		<div className={styles.topBar}>
			<span className={styles.heading}>
				<img src={logo} alt="Logo" className={styles.logo} />
			</span>
			<span className={styles.monthPickerContainer}>
				<Icon
					iconType={Icon.type.SVG}
					icon={NavigationChevronLeft}
					iconLabel="arrowLeft"
					iconSize={20}
					onClick={handleAssigneeOnClickLeft}
				/>

				<span className={styles.monthPicker}>
					<Tab>{`${MONTHS[selectedMonth]} 2022`}</Tab>
				</span>
				<Icon
					iconType={Icon.type.SVG}
					iconLabel="arrowRight"
					icon={NavigationChevronRight}
					iconSize={20}
					onClick={handleAssigneeOnClickRight}
				/>
			</span>
			<span className={styles.buttons}>
				<MenuButton
					component={Add}
					text="New Transaction"
					className={styles.addButton}
				>
					<Menu id="menu" size={Menu.sizes.MEDIUM}>
						<MenuItem
							icon={Download}
							iconType={MenuItem.iconType.SVG}
							title="Income"
							onClick={() => onAddTransaction("Income")}
						/>
						<MenuItem
							icon={Upload}
							iconType={MenuItem.iconType.SVG}
							title="Expense"
							onClick={() => onAddTransaction("Expense")}
						/>
					</Menu>
				</MenuButton>
				<IconButton
					icon={Person}
					kind={IconButton.kinds.SECONDARY}
					className={styles.profileButton}
				/>
			</span>
		</div>
	);
};

export default TopBar;
