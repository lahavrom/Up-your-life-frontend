import {
  Accordion,
  AccordionItem,
  Heading,
  Dropdown,
} from "monday-ui-react-core";
import CardsContainer from "../cardsContainer/CardsContainer";
import Card from "../card/Card";
import styles from "./transactionLog.module.css";
import { useMemo, useState } from "react";
import Transaction from "../transaction/Transaction";
import { makeDate } from "../../helpers/utils";

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

  const optionsIcons = useMemo(
    () => [
      { value: "all", label: "Show All" },
      { value: "expense", label: "Expenses" },
      { value: "income", label: "Incomes" },
    ],
    []
  );

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
        <div className={styles.cardHeader}>
          <Heading value="Transactions" type={Heading.types.h3} />
          <Dropdown
            clearable={true}
            className={styles.filter}
            placeholder="Filter By"
            options={optionsIcons}
            searchable={false}
            onChange={(value) => handleFilter(value.value)}
          />
        </div>
        <div className={styles.transactionsHeader}>
          {["Date", "Description", "Amount"].map((value) => (
            <Heading
              value={value}
              type={Heading.types.h4}
              className={styles.detailedTransHeader}
            />
          ))}
        </div>
        <ul className={styles.listTransactions}>
          {filteredTransactions.map(({ description, amount, date, type }) => (
            <li>
              <Transaction
                description={description}
                amount={amount}
                date={date}
                type={type}
              />
            </li>
          ))}
        </ul>

        {/* <Accordion className="monday-storybook-accordion_small-wrapepr">
          <AccordionItem title="Future Transactions">
            {mockTransactionsTmp.map(({ description, amount, date, type }) => (
              <Transaction
                description={description}
                amount={amount}
                date={date}
                type={type}
              />
            ))}
          </AccordionItem>
          {mockTransactionsTmp.map(({ description, amount, date, type }) => (
            <>
              <Transaction
                description={description}
                amount={amount}
                date={date}
                type={type}
              />
            </>
          ))}
        </Accordion> */}
      </Card>
    </CardsContainer>
  );
};

export default TransactionLog;
