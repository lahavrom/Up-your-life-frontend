import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { makeDateTimestamp } from "../../helpers/utils";
import CardsContainer from "../cardsContainer/CardsContainer";
import Card from "../card/Card";
import TransactionLogHeader from "./components/transactionLogHeader/TransactionLogHeader";
import FutureTransactions from "./components/futureTransactions/FutureTransactions";
import ListTransactions from "./components/listTransactions/ListTransactions";

const filterFutureTransactions = (transactions) => {
  return transactions.filter((elem) => elem.dayOfMonth > new Date().getDate());
};

const TransactionLog = () => {
  const fixed = useSelector(({ transactionsState }) => transactionsState.fixed);

  const account = useSelector(
    ({ transactionsState }) => transactionsState.account
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
