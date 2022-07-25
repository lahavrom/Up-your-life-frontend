import { Button, MenuButton, Menu, MenuItem } from "monday-ui-react-core";
import {
	AddSmall,
	MoveArrowDown,
	MoveArrowUp,
} from "monday-ui-react-core/dist/allIcons";
import logo from "./logo4.png";
import styles from "./Sidebar.module.scss";

function Sidebar() {
	function handleNewAdd(type) {
		alert(type);
	}

	return (
		<div className={styles.container}>
			{/* <div className={styles.img}> */}
			<img src={logo} alt="Logo" className={styles.img} />
			{/* </div> */}
			<Button
				className="funcBtn"
				kind={Button.kinds.SECONDARY}
				leftIcon={MoveArrowUp}
			>
				Income
			</Button>
			<Button
				className="funcBtn"
				kind={Button.kinds.SECONDARY}
				leftIcon={MoveArrowDown}
			>
				Expenses
			</Button>
			<MenuButton
				tooltipContent="Add new expense/income"
				component={AddSmall}
				text="Add"
				className="funcBtn"
			>
				<Menu id="menu" size={Menu.sizes.MEDIUM}>
					<MenuItem
						title="Add Income"
						icon={MoveArrowUp}
						id="income"
						onClick={() => handleNewAdd("income")}
					/>
					<MenuItem
						title="Add Expense"
						id="expense"
						icon={MoveArrowDown}
						onClick={() => handleNewAdd("expense")}
					/>
				</Menu>
			</MenuButton>
		</div>
	);
}

export default Sidebar;
