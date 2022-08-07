import { useSelector } from "react-redux";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { selectTransactionsByDate } from "../../redux/transactions/selectors/selectTransactionsByDate";
import CardsContainer from "../cardsContainer/CardsContainer";
import Card from "../card/Card";
import "./transactionsCalendar.css";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

const TransactionsCalender = () => {
  const transactionsByDate = useSelector(selectTransactionsByDate);

  return (
    <CardsContainer>
      <Card>
        <Calendar
          views={["month"]}
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={transactionsByDate}
          style={{ height: "70vh" }}
          toolbar={false}
          eventPropGetter={(event) => {
            const backgroundColor = event.color;
            return { style: { backgroundColor } };
          }}
        />
      </Card>
    </CardsContainer>
  );
};

export default TransactionsCalender;
