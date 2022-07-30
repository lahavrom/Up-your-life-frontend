import { useState } from "react";
import { makeDate } from "../../helpers/utils";
import CardsContainer from "../cardsContainer/CardsContainer";
import Card from "../card/Card";
import TransactionLogHeader from "./components/transactionLogHeader/TransactionLogHeader";
import FutureTransactions from "./components/futureTransactions/FutureTransactions";
import ListTransactions from "./components/listTransactions/ListTransactions";

const TransactionLog = ({ transactions }) => {
  const mockTransactions = [
    {
      description: "abccccccc",
      date: 1659086419316,
      amount: 40,
      type: "expense",
    },
    {
      description: "abccccccc",
      date: 1659083419316,
      amount: 50,
      type: "income",
    },
    {
      description: "abcfgshdfc",
      date: 1355076419316,
      amount: 10,
      type: "income",
    },
    {
      description: "buy a dog",
      date: 1659086412316,
      amount: 20,
      type: "expense",
    },
    {
      description: "buy a dog",
      date: 1659086412316,
      amount: 20,
      type: "expense",
    },
    {
      description: "buy a dog",
      date: 1659086412316,
      amount: 20,
      type: "expense",
    },
    {
      description: "buy a dog",
      date: 1659086412316,
      amount: 20,
      type: "expense",
    },
    {
      description: "buy a dog",
      date: 1659086412316,
      amount: 20,
      type: "income",
    },
    {
      description: "buy a dog",
      date: 1659086412316,
      amount: 20,
      type: "expense",
    },
    {
      description: "buy a dog",
      date: 1659086412316,
      amount: 20,
      type: "expense",
    },
    {
      description: "buy a dog",
      date: 1659086412316,
      amount: 20,
      type: "expense",
    },
  ];

  const mockTransactionsTmp = mockTransactions.map((elem) => {
    return { ...elem, date: makeDate(elem.date) };
  });

  const [filteredTransactions, setFilteredTransactions] = useState([
    ...mockTransactionsTmp,
  ]);

  const handleFilter = (value) => {
    switch (value) {
      case "all":
        setFilteredTransactions([...mockTransactionsTmp]);
        break;
      default:
        setFilteredTransactions(
          [...mockTransactionsTmp].filter((elem) => elem.type === value)
        );
    }
  };

  return (
    <CardsContainer>
      <Card>
        <TransactionLogHeader handleFilter={handleFilter} />
        <FutureTransactions futureTransactions={filteredTransactions} />
        <ListTransactions transactions={filteredTransactions} />
      </Card>
    </CardsContainer>
  );
};

export default TransactionLog;
