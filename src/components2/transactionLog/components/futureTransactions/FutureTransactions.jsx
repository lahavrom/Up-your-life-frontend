import { Accordion, AccordionItem } from "monday-ui-react-core";
import ListTransactions from "../listTransactions/ListTransactions";
import "./futureTransactions.css";

const FutureTransactions = ({ futureTransactions }) => {
  return (
    <Accordion allowMultiple>
      <AccordionItem title="Future Transactions" className="futureTrans">
        <ListTransactions transactions={futureTransactions} />
      </AccordionItem>
    </Accordion>
  );
};

export default FutureTransactions;
