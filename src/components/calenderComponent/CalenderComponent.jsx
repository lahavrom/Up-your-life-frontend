import { useSelector } from "react-redux";
import { useMemo } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import "./calenderComponent.css";
import { selectCurrMonthAccountTransactions } from "../../redux/transactions/selectors/selectAccountTransactions";
import { useEffect } from "react";
import events from "./events";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

const generateStart = (effectiveDate) => {
	const date = new Date(effectiveDate);
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	return new Date();
};

const generateAccountEvents = (account) => {
	return account.map((currAccountTransaction) => ({
		id: currAccountTransaction.id,
		title: `${currAccountTransaction.type}`,
		desc: `${currAccountTransaction.value}`,
		start: generateStart(currAccountTransaction.effectiveDate),
		end: generateStart(currAccountTransaction.effectiveDate),
	}));
};

export default function CalenderComponent() {
	const account = useSelector(selectCurrMonthAccountTransactions);

	const accountEvents = useMemo(
		() => generateAccountEvents(account),
		[account]
	);

	useEffect(() => {
		console.log(accountEvents);
	}, [accountEvents]);

	console.log(events);
	return (
		<div>
			<Calendar
				views={["month"]}
				// selectable
				localizer={localizer}
				defaultDate={new Date()}
				defaultView="month"
				events={accountEvents}
				style={{ height: "100vh" }}
				onSelectEvent={(event) => alert(`${event.title} ${event.desc}`)}
			/>
		</div>
	);
}
