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
  ResponsiveContainer,
} from "recharts";
import { Heading } from "monday-ui-react-core";
import styles from "./expensesPerUser.module.css";
import { selectUsers } from "../../redux/account/selectors";
import { selectCurrMonthAccountTransactions } from "../../redux/transactions/selectors/selectAccountTransactions";
import CardsContainer from "../cardsContainer/CardsContainer";
import Card from "../card/Card";
import TransactionAvatar from "../transactionLog/components/transactionAvatar/TransactionAvatar";

const groupExpenseByUser = (users, transactions) => {
  const groupExpenses = {};
  transactions
    .filter((elem) => elem.type === "Expense")
    .forEach((elem) => {
      if (groupExpenses.hasOwnProperty(elem.userId)) {
        groupExpenses[elem.userId] += elem.value;
      } else {
        groupExpenses[elem.userId] = elem.value;
      }
    });

  const expenses = [];

  for (const userId in groupExpenses) {
    expenses.push({
      userId: parseInt(userId),
      avatar: <TransactionAvatar userId={parseInt(userId)} />,
      expense: groupExpenses[userId],
    });
    // const { firstName, lastName, isProfileImage } = users.find(
    //   (user) => user.userId === parseInt(userId)
    // );
    // expenses.push({
    //   userId,
    //   firstName,
    //   lastName,
    //   isProfileImage,
    //   expense: groupExpenses[userId],
    // });
  }

  return expenses;
};

const ExpensesPerUser = () => {
  const users = useSelector(selectUsers);
  const transactions = useSelector(selectCurrMonthAccountTransactions);

  const expenses = groupExpenseByUser(users, transactions);

  console.log(expenses);
  console.log("here");

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
    },
  ];

  const Tick = ({ payload }) => {
    console.log(payload);
    return (
      <foreignObject>
        {/* <TransactionAvatar userId={payload.value} /> */}
        <div>hello</div>
      </foreignObject>
    );
  };

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
          width="90%"
          height="90%"
        >
          <BarChart data={expenses}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="userId" tick={<Tick />} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="expense" fill="#8884d8" />
            {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
          </BarChart>
        </ResponsiveContainer>
        {/* {expenses.map((e) => (
          <TransactionAvatar userId={e.userId} />
        ))} */}
      </Card>
    </CardsContainer>
  );
};

export default ExpensesPerUser;
