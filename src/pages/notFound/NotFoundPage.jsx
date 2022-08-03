import { NavLink, useNavigate } from "react-router-dom";
import { Heading } from "monday-ui-react-core";

import { ROUTES } from "../../routes/AppRouter";

import logo from "../../assets/up_logo.png";
import tapHand from "../../assets/tap.png";
import styles from "./notFoundPage.module.css";

const NotFoundPage = () => {
	return (
		<div className={styles.container}>
			<img src={logo} alt="" className={styles.logo} />

			<Heading
				type={Heading.types.h3}
				value="Error - 404"
				size="small"
			></Heading>
			<Heading
				type={Heading.types.h2}
				value="Sorry, We couldn't find the page"
			></Heading>
			<img src={tapHand} className={styles.tapHand} alt="" />
			<div className={styles.linkContainer}>
				<NavLink to={ROUTES.LOGIN}>Back to login</NavLink>
			</div>
		</div>
	);
};

export default NotFoundPage;
