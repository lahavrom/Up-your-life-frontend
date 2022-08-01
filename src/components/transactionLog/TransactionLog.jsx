import { useState, useMemo, useEffect } from "react";
import { useSelector } from "react-redux";

import { makeDateTimestamp } from "../../helpers/dateTimeUtils";
import CardsContainer from "../cardsContainer/CardsContainer";
import Card from "../card/Card";
import TransactionLogHeader from "./components/transactionLogHeader/TransactionLogHeader";
import FutureTransactions from "./components/futureTransactions/FutureTransactions";
import ListTransactions from "./components/listTransactions/ListTransactions";

const filterFutureTransactions = (transactions) => {
  return transactions.filter((elem) => elem.dayOfMonth > new Date().getDate());
};

const TransactionLog = ({ onEditTransaction }) => {
  const fixed = useSelector(({ transactionsState }) => transactionsState.fixed);

  const account = useSelector(
    ({ transactionsState }) => transactionsState.account
  );

  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [filteredFutureTransactions, setFilteredFutureTransactions] = useState(
    []
  );

  const futureTransactions = useMemo(
    () =>
      filterFutureTransactions(
        fixed.map((elem) => {
          return {
            ...elem,
            date: `${elem.dayOfMonth}/${
              new Date().getMonth() + 1
            }/${new Date().getFullYear()}`,
          };
        })
      ),
    [fixed]
  );

  const transactions = useMemo(
    () => [
      ...fixed
        .filter((elem) => elem.dayOfMonth <= new Date().getDate())
        .map((elem) => {
          return {
            ...elem,
            date: `${elem.dayOfMonth}/${
              new Date().getMonth() + 1
            }/${new Date().getFullYear()}`,
          };
        }),
      ...account.map((elem) => {
        return { ...elem, date: makeDateTimestamp(elem.effectiveDate) };
      }),
    ],
    [fixed, account]
  );

  const handleFilter = (value) => {
    switch (value) {
      case "all":
        setFilteredTransactions([...transactions]);
        setFilteredFutureTransactions([...futureTransactions]);
        break;
      default:
        setFilteredTransactions(
          [...transactions].filter((elem) => elem.type === value)
        );
        setFilteredFutureTransactions(
          [...futureTransactions].filter((elem) => elem.type === value)
        );
    }
  };

  useEffect(() => {
    setFilteredTransactions(transactions);
    setFilteredFutureTransactions(futureTransactions);
  }, [transactions, futureTransactions]);

  return (
    <CardsContainer>
      <Card>
        <TransactionLogHeader handleFilter={handleFilter} />
        <FutureTransactions futureTransactions={filteredFutureTransactions} />
        <ListTransactions
          transactions={filteredTransactions}
          onEditTransaction={onEditTransaction}
        />
      </Card>
    </CardsContainer>
  );
};

export default TransactionLog;
