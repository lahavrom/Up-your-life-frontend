import { Heading } from "monday-ui-react-core";

import { APP_ROUTES } from "../../helpers/constants";
import { NavLink } from "react-router-dom";

import styles from "./bottomBar.module.css";
const BottomBar = () => {
	return (
		<div className={styles.container}>
			<NavLink
				className={styles.navLink}
				to={APP_ROUTES.UP_YOUR_LIFE}
				style={({ isActive }) => ({
					color: isActive ? "green" : "black",
					textDecoration: "none",
				})}
			>
				Home
			</NavLink>
			<NavLink
				className={styles.navLink}
				to={APP_ROUTES.ABOUT}
				style={({ isActive }) => ({
					color: isActive ? "green" : "black",
					textDecoration: "none",
				})}
			>
				About
			</NavLink>
			<Heading
				type={Heading.types.h4}
				className={styles.Heading}
				value="Careers"
			/>
			<Heading
				type={Heading.types.h4}
				className={styles.Heading}
				value="Associates"
			/>
			<Heading
				type={Heading.types.h4}
				className={styles.Heading}
				value="Packages"
			/>
			<Heading
				type={Heading.types.h4}
				className={styles.Heading}
				value="Terms"
			/>
			<Heading
				type={Heading.types.h4}
				className={styles.Heading}
				value="Contact"
			/>
			<Heading
				type={Heading.types.h4}
				className={styles.Heading}
				value="Help"
			/>
		</div>
	);
};

export default BottomBar;
