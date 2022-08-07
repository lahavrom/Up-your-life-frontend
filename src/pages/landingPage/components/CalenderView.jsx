import { Divider, Heading } from "monday-ui-react-core";

import calendar from "../../../assets/click.gif";
import { ABOUT_INFO } from "../../../helpers/constants";

import styles from "./calenderView.module.css";

const CalenderView = () => {
	return (
		<div className={styles.container}>
			<img src={calendar} alt="calendar" className={styles.calender} />

			<Divider direction={Divider.directions.HORIZONTAL} />
			<Heading className={styles.text} />
		</div>
	);
};
export default CalenderView;
