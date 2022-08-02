import { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Heading } from "monday-ui-react-core";

import { TRANSACTIONS_TYPES } from "../../helpers/constants";
import { currentMonthAccountTransactions } from "../../redux/transactions/selectors/selectAccountTransactions";
import { futureFixedTransactions } from "../../redux/transactions/selectors/selectFixedTransactions";
import styles from "./compareExpenesIncome.module.css";

const calculateSumOfTransactionsByType = (transactions) => {
  let incomes = 0;
  let expenses = 0;
  transactions.forEach(({ type, value }) => {
    if (type === TRANSACTIONS_TYPES.INCOME) {
      incomes += value;
    } else {
      expenses += value;
    }
  });

  return { incomes, expenses };
};
const balanceCalculate = (sumsOfFutureFixedEvents, sumsOfAccountEvents) => {
  const allExpenses =
    sumsOfFutureFixedEvents.expenses + sumsOfAccountEvents.expenses;
  const allIncomes =
    sumsOfFutureFixedEvents.incomes + sumsOfAccountEvents.incomes;

  const balance = allIncomes - allExpenses;
  return balance;
};

const CompareExpenesIncomes = () => {
  const fixedTransactions = useSelector(futureFixedTransactions);

  const accountTransactions = useSelector(currentMonthAccountTransactions);

  const sumsOfFutureFixedEvents = useMemo(
    () => calculateSumOfTransactionsByType(fixedTransactions),
    [fixedTransactions]
  );

  const sumsOfAccountEvents = useMemo(
    () => calculateSumOfTransactionsByType(accountTransactions),
    [accountTransactions]
  );

  const sumsOfCalculate = useMemo(
    () => balanceCalculate(sumsOfFutureFixedEvents, sumsOfAccountEvents),

    [sumsOfFutureFixedEvents, sumsOfAccountEvents]
  );

  return (
    <div className={styles.container}>
      <Heading value="Expenses vs. Incomes" type={Heading.types.h2} />
      <Heading
        type={Heading.types.h2}
        value="This month comparing your expenses vs. your Incomes:"
        size="small"
      />
      <BarChart
        width={300}
        height={300}
        data={[
          {
            Incomes:
              sumsOfFutureFixedEvents.incomes + sumsOfAccountEvents.incomes,
            Expenses:
              sumsOfFutureFixedEvents.expenses + sumsOfAccountEvents.expenses,
            amt: 1000,
          },
        ]}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Incomes" fill="#82ca9d" radius={[10, 10, 0, 0]} />
        <Bar
          dataKey="Expenses"
          fill="var(--shareable-color)"
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
      <Heading
        className={styles.heading}
        type={Heading.types.h2}
        value={`At the end of the month your balance will be ${sumsOfCalculate}₪`}
        size="small"
      />
    </div>
  );
};

export default CompareExpenesIncomes;
