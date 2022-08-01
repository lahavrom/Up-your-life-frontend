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

import { getDayOfMonth } from "../../helpers/dateTimeUtils";
import styles from "./compareExpenesIncome.module.css";

const calculateSumOfTransactionsByType = (transactions) => {
  let incomes = 0;
  let expenses = 0;
  transactions.forEach(({ type, value }) => {
    if (type === "Income") {
      incomes += value;
    } else {
      expenses += value;
    }
  });
  return { incomes, expenses };
};

const CompareExpenesIncomes = () => {
  const fixed = useSelector(({ transactionsState }) => transactionsState.fixed);

  const account = useSelector(
    ({ transactionsState }) => transactionsState.account
  );

  const currDayOfMonth = getDayOfMonth();
  const futureFixedEvents = fixed.filter(
    (fixedEvent) => fixedEvent.dayOfMonth > currDayOfMonth
  );
  const sumsOfFutureFixedEvents = useMemo(
    () => calculateSumOfTransactionsByType(futureFixedEvents),
    [futureFixedEvents]
  );

  const sumsOfAccountEvents = useMemo(
    () => calculateSumOfTransactionsByType(account),
    [account]
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
        <Bar dataKey="Expenses" fill="#D57E7E" radius={[10, 10, 0, 0]} />
      </BarChart>
    </div>
  );
};

export default CompareExpenesIncomes;
