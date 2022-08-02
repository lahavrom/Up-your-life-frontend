import { useState, useMemo, useEffect } from "react";
import { useSelector } from "react-redux";

import { Heading } from "monday-ui-react-core";
import magnifyingGlass from "../../assets/magnifying-glass.png";
import styles from "./transactionLog.module.css";
import {
  makeDateTimestamp,
  getMonth,
  makeDateFromDay,
} from "../../helpers/dateTimeUtils";
import CardsContainer from "../cardsContainer/CardsContainer";
import Card from "../card/Card";
import TransactionLogHeader from "./components/transactionLogHeader/TransactionLogHeader";
import TableTransactions from "./components/tableTransactions/TableTransactions";

const filterFutureTransactions = (transactions) => {
  return transactions.filter((elem) => elem.dayOfMonth > new Date().getDate());
};

const TransactionLog = ({ onEditTransaction }) => {
  const selectedMonth = useSelector(({ dateState }) => dateState.month);

  const fixed = useSelector(({ transactionsState }) => transactionsState.fixed);

  const account = useSelector(
    ({ transactionsState }) => transactionsState.account
  );

  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [filteredFutureTransactions, setFilteredFutureTransactions] = useState(
    []
  );
  const [showFutureTransactions, setShowFutureTransactions] = useState(false);

  const futureTransactions = useMemo(
    () =>
      filterFutureTransactions(
        fixed.map((elem) => {
          return {
            ...elem,
            date: makeDateFromDay(elem.dayOfMonth, selectedMonth + 1),
          };
        })
      ),
    [fixed, selectedMonth]
  );

  const transactions = useMemo(
    () => [
      ...fixed
        .filter((elem) => elem.dayOfMonth <= new Date().getDate())
        .map((elem) => {
          return {
            ...elem,
            date: makeDateFromDay(elem.dayOfMonth, selectedMonth + 1),
          };
        }),
      ...account
        .map((elem) => {
          return { ...elem, date: makeDateTimestamp(elem.effectiveDate) };
        })
        .filter((elem) => getMonth(elem.date) === selectedMonth + 1),
    ],
    [fixed, account, selectedMonth]
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

  const noTransactionsToShow = () => {
    if (filteredTransactions.length === 0) {
      if (!showFutureTransactions || filteredFutureTransactions.length === 0) {
        return true;
      }
    }
    return false;
  };

  return (
    <CardsContainer>
      <Card>
        <div className={styles.transactionLogCard}>
          <TransactionLogHeader
            handleFilter={handleFilter}
            showFutureTransactions={showFutureTransactions}
            setShowFutureTransactions={setShowFutureTransactions}
          />
          {noTransactionsToShow() ? (
            <>
              <Heading
                type={Heading.types.h2}
                value="no relevant data found"
                size="small"
                customColor={"grey"}
              />
              <img src={magnifyingGlass} className={styles.img} alt="" />
            </>
          ) : (
            <TableTransactions
              transactions={filteredTransactions}
              futureTransactions={
                showFutureTransactions ? filteredFutureTransactions : []
              }
              onEditTransaction={onEditTransaction}
            />
          )}
        </div>
      </Card>
    </CardsContainer>
  );
};

export default TransactionLog;
