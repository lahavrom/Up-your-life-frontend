import { useState } from "react";
import { useSelector } from "react-redux";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { currentMonthAccountExpenses } from "../../redux/transactions/selectors/selectAccountTransactions";
// import events from "./events";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { generateEffectiveDate } from "../../helpers/dateTimeUtils";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

export default function CalenderComponent() {
	const AccountExpenses = useSelector(currentMonthAccountExpenses);
	const [eventsData, setEventsData] = useState(AccountExpenses);
	console.log(AccountExpenses);

	// const handleSelect = ({ start, end }) => {
	// 	const title = window.prompt("New Event name");
	// 	if (title)
	// 		setEventsData([
	// 			...eventsData,
	// 			{
	// 				start,
	// 				title,
	// 			},
	// 		]);
	// };
	return (
		<div>
			<Calendar
				views={["month"]}
				selectable
				localizer={localizer}
				defaultDate={new Date()}
				defaultView="month"
				AccountExpenses={eventsData}
				style={{ height: "100vh" }}
				onSelectEvent={(event) => alert(event.title)}
				// onSelectSlot={handleSelect}
			/>
		</div>
	);
}
