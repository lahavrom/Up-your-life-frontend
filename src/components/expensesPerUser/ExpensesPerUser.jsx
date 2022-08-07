import { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Heading } from "monday-ui-react-core";
import styles from "./expensesPerUser.module.css";
import { selectUsers } from "../../redux/account/selectors";
import { selectAccountExpenses } from "../../redux/transactions/selectors/selectAccount";
import CardsContainer from "../cardsContainer/CardsContainer";
import Card from "../card/Card";
import TransactionAvatar from "../transactionLog/components/transactionAvatar/TransactionAvatar";
import { selectFixedExpenses } from "../../redux/transactions/selectors/selectFixed";

const groupExpenseByUser = (users, transactions) => {
  const groupExpenses = {};
  transactions.forEach((elem) => {
    if (groupExpenses.hasOwnProperty(elem.userId)) {
      groupExpenses[elem.userId] += elem.value;
    } else {
      groupExpenses[elem.userId] = elem.value;
    }
  });

  const expenses = [];

  for (const userId in groupExpenses) {
    const { firstName, lastName } = users.find(
      (user) => user.userId === parseInt(userId)
    );
    expenses.push({
      userId: parseInt(userId),
      name: `${firstName} ${lastName}`,
      Expense: groupExpenses[userId],
    });
  }

  return expenses;
};

const ExpensesPerUser = () => {
  const users = useSelector(selectUsers);
  const account = useSelector(selectAccountExpenses);
  const fixed = useSelector(selectFixedExpenses);

  const expenses = useMemo(
    () => groupExpenseByUser(users, [...account, ...fixed]),
    [users, account, fixed]
  );

  return (
    <CardsContainer>
      <Card>
        <Heading
          value="Expenses Per User"
          type={Heading.types.h3}
          className={styles.header}
        />
        <ResponsiveContainer
          className={styles.barChart}
          width="70%"
          height="75%"
        >
          <BarChart data={expenses}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={false} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="Expense" fill="#a25ddc" />
          </BarChart>
        </ResponsiveContainer>
        <div className={styles.avatars}>
          {expenses.map((elem) => (
            <TransactionAvatar userId={elem.userId} />
          ))}
        </div>
      </Card>
    </CardsContainer>
  );
};

export default ExpensesPerUser;
