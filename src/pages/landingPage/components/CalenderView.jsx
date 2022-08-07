import { Divider } from "monday-ui-react-core";
import calendar from "../../../assets/calendar.gif";
import styles from "./calenderView.module.css";

const CalenderView = () => {
  return (
    <div className={styles.container}>
      <img src={calendar} alt="calendar" className={styles.calendar} />

      <Divider direction={Divider.directions.HORIZONTAL} />
      <p className={styles.text}>Plan in advance your cash flow</p>
    </div>
  );
};
export default CalenderView;
