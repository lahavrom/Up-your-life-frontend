import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import { APP_ROUTES } from "../../helpers/constants";
import { selectUser } from "../../redux/user/selectors";
import { Heading } from "monday-ui-react-core";

import only_title from "../../assets/only_title.png";
import arrow_only from "../../assets/arrow_only.png";
import styles from "./loaderPage.module.css";

const LoaderPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const user = useSelector(selectUser);

	useEffect(() => {
		if (user) {
			navigate(APP_ROUTES.LOADING);
		}
	}, [dispatch, navigate, user]);

	return (
		<div className={styles.container}>
			<img src={only_title} alt="" className={styles.logo} />
			<img src={arrow_only} alt="" className={styles.arrow} />
			<Heading
				type={Heading.types.h2}
				value="Loading.."
				size="small"
				className={styles.loading}
			/>
		</div>
	);
};

export default LoaderPage;
