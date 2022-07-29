import { List } from "monday-ui-react-core";
import {
	Dashboard,
	Person,
	NavigationChevronUp,
	NavigationChevronDown,
} from "monday-ui-react-core/dist/allIcons";

import SidebarListItem from "./components/SidebarListItem";
import logo from "./logo4.png";
import incomesLogo from "./incomes.png";
import styles from "./sidebar.module.scss";

const Sidebar = () => {
	return (
		<>
			<img src={logo} alt="Logo" className={styles.img} />
			<List>
				<SidebarListItem value="Dashboard" href="#dashboard" icon={Dashboard} />
				<SidebarListItem
					value="Incomes"
					href="#incomes"
					icon={Person}
					className={styles.logo}
				/>
				<SidebarListItem value="Expenses" href="#expenses" />
				<img src={incomesLogo} alt="Logo" className={styles.logo} />
				<SidebarListItem
					value="Profile"
					href="#profile"
					icon={NavigationChevronDown}
				/>
			</List>
		</>
	);
};

export default Sidebar;
