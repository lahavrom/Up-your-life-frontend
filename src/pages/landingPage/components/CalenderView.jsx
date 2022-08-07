import { Divider, Heading } from "monday-ui-react-core";

import calendar from "../../../assets/calendar.gif";
import { ABOUT_INFO } from "../../../helpers/constants";

import styles from "./calenderView.module.css";

const CalenderView = () => {
	return (
		<div className={styles.container}>
			<img src={calendar} alt="calendar" className={styles.calendar} />

			<Divider direction={Divider.directions.HORIZONTAL} />
			<p className={styles.text}>
				Knowing in advance when the expense or income will be inserted
			</p>
		</div>
	);
};
export default CalenderView;
