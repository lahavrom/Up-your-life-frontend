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

import styles from "./compareExpenesIncome.module.scss";

const CompareExpenesIncomes = () => {
  return (
    <div className={styles.container}>
      <Heading value="Expenses vs. Incomes" type={Heading.types.h2} />
      <BarChart
        width={300}
        height={300}
        data={[
          {
            name: "Month",
            Expenses: 0,
            Incomes: 0,
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
        <Bar dataKey="Expenses" fill="#DC143C" />
        <Bar dataKey="Incomes" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default CompareExpenesIncomes;
