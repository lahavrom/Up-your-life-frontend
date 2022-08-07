import { useState } from "react";

import ReactCardFlip from "react-card-flip";
import TransactionLog from "../transactionLog/TransactionLog";
import TransactionsCalender from "../transactionsCalendar/TransactionsCalendar";

const TransactionLogCalender = ({ onEditTransaction }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped((prevState) => !prevState);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <TransactionLog
        onEditTransaction={onEditTransaction}
        flipCard={() => handleClick()}
        isFlipped={isFlipped}
      />
      <TransactionsCalender
        isFlipped={isFlipped}
        flipCard={() => handleClick()}
      />
    </ReactCardFlip>
  );
};

export default TransactionLogCalender;
