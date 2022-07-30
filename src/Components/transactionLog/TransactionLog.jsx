import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { makeDateTimestamp, makeDateFromDay } from "../../helpers/utils";
import CardsContainer from "../cardsContainer/CardsContainer";
import Card from "../card/Card";
import TransactionLogHeader from "./components/transactionLogHeader/TransactionLogHeader";
import FutureTransactions from "./components/futureTransactions/FutureTransactions";
import ListTransactions from "./components/listTransactions/ListTransactions";

const filterFutureTransactions = (transactions) => {
  return transactions.filter((elem) => elem.dayOfMonth > new Date().getDate());
};

const TransactionLog = () => {
  const fixedTransactions = useSelector(
    ({ fixedEventsState }) => fixedEventsState.fixedEvents
  );
  const accountTransactions = useSelector(
    ({ accountEventsState }) => accountEventsState.accountEvents
  );

  // const currentMonth = useSelector( () => currentMonth);
  // makeDateFromDay(currentMonth)

  const futureTransactions = useMemo(
    () =>
      filterFutureTransactions(
        fixedTransactions.map((elem) => {
          return {
            ...elem,
            date: `${elem.dayOfMonth}/${
              new Date().getMonth() + 1
            }/${new Date().getFullYear()}`,
          };
        })
      ),
    [fixedTransactions]
  );

  const transactions = useMemo(
    () => [
      ...fixedTransactions
        .filter((elem) => elem.dayOfMonth <= new Date().getDate())
        .map((elem) => {
          return {
            ...elem,
            date: `${elem.dayOfMonth}/${
              new Date().getMonth() + 1
            }/${new Date().getFullYear()}`,
          };
        }),
      ...accountTransactions.map((elem) => {
        return { ...elem, date: makeDateTimestamp(elem.effectiveDate) };
      }),
    ],
    [fixedTransactions, accountTransactions]
  );

  const [filteredTransactions, setFilteredTransactions] = useState([
    ...transactions,
  ]);

  const handleFilter = (value) => {
    switch (value) {
      case "all":
        setFilteredTransactions([...transactions]);
        break;
      default:
        setFilteredTransactions(
          [...transactions].filter((elem) => elem.type === value)
        );
    }
  };

  return (
    <CardsContainer>
      <Card>
        <TransactionLogHeader handleFilter={handleFilter} />
        <FutureTransactions futureTransactions={futureTransactions} />
        <ListTransactions transactions={filteredTransactions} />
      </Card>
    </CardsContainer>
  );
};

export default TransactionLog;
