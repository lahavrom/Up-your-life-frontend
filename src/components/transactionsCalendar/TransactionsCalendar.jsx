import { useSelector } from "react-redux";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Checkbox, IconButton, Heading } from "monday-ui-react-core";
import { Info } from "monday-ui-react-core/dist/allIcons";
import { selectTransactionsByDate } from "../../redux/transactions/selectors/selectTransactionsByDate";
import CardsContainer from "../cardsContainer/CardsContainer";
import Card from "../card/Card";
import "./transactionsCalendar.css";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

const TransactionsCalender = ({ flipCard, isFlipped }) => {
  const transactionsByDate = useSelector(selectTransactionsByDate);

  return (
    <CardsContainer>
      <Card>
        <Heading
          value="Calendar View"
          type={Heading.types.h3}
          className="header"
        />
        <div className="checkBox">
          <IconButton
            icon={Info}
            ariaLabel="Check the box to show calender view"
            size={IconButton.sizes.SMALL}
          />
          <Checkbox
            label="Calendar view"
            onChange={(e) => flipCard(e)}
            checked={isFlipped}
          />
        </div>
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
