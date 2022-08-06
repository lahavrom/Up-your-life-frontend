import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import CardsContainer from "../cardsContainer/CardsContainer";
import Card from "../card/Card";
import { selectFixed } from "../../redux/transactions/selectors/selectFixed";
import { selectAccount } from "../../redux/transactions/selectors/selectAccount";
import "./calender.css";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

const generateEvents = (fixed, account) => {
  const transactions = [...fixed, ...account];
  return transactions.map((currTransaction) => ({
    id: currTransaction.id,
    title: `${currTransaction.type}`,
    desc: `${currTransaction.value}`,
    start: currTransaction.dayOfMonth
      ? new Date().setDate(currTransaction.dayOfMonth)
      : currTransaction.effectiveDate,
    end: currTransaction.dayOfMonth
      ? new Date().setDate(currTransaction.dayOfMonth)
      : currTransaction.effectiveDate,
  }));
};

export default function CalenderComponent() {
  const fixed = useSelector(selectFixed);
  const account = useSelector(selectAccount);

  const events = useMemo(
    () => generateEvents(fixed, account),
    [fixed, account]
  );

  return (
    <CardsContainer>
      <Card>
        <Calendar
          views={["month"]}
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={events}
          style={{ height: "100vh" }}
          // onSelectEvent={(event) => alert(`${event.title} ${event.desc}`)}
        />
      </Card>
    </CardsContainer>
  );
}
