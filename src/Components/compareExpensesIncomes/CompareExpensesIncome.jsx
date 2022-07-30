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
import { useDispatch, useSelector } from "react-redux";
import { useMemo, useEffect } from "react";
import styles from "./compareExpenesIncome.module.css";
import { fetchAllFixedEvents } from "../../redux/fixedEvents/actions/fetchAllFixedEvents";

const CompareExpenesIncomes = () => {
  const dispatch = useDispatch();

  const fixedEvents = useSelector(
    (state) => state.fixedEventsState.fixedEvents
  );

  const calculateSumOfFixedEvents = (fixedEvents) => {
    let sumOfExpenses = 0;
    let sumOfIncomes = 0;
    fixedEvents.forEach(({ type, value }) => {
      if (type === "expense") {
        sumOfExpenses += value;
      } else {
        sumOfIncomes += value;
      }
    });
    return [sumOfExpenses, sumOfIncomes];
  };

  const [sumOfExpenses, sumOfIncomes] = useMemo(
    () => calculateSumOfFixedEvents(fixedEvents),
    [fixedEvents]
  );

  useEffect(() => {
    dispatch(fetchAllFixedEvents());
  }, [dispatch]);

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
            name: "Month",
            Expenses: sumOfExpenses,
            Incomes: sumOfIncomes,
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
        <Bar dataKey="Expenses" fill="#D57E7E" />
        <Bar dataKey="Incomes" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default CompareExpenesIncomes;
