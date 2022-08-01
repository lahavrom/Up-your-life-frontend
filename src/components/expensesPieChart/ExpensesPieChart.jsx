import { useCallback, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { PieChart, Pie, Cell, Sector } from "recharts";
import { Heading } from "monday-ui-react-core";

import magnifyingGlass from "../../assets/magnifying-glass.png";
import { COLORS, CATEGORIES } from "../../helpers/constants";
import { selectCurrentMonthExpenses } from "../../redux/transactions/selectors/selectCurrentMonthExpenses";
import styles from "./expensesPieChart.module.css";

const calculateOfFixedEvents = (currentMonthExpenses) => {
  const sumOfExpensesByCategory = {
    Food: 0,
    Rent: 0,
    Construction: 0,
    Shopping: 0,
    Pets: 0,
    Vacation: 0,
    Car: 0,
    School: 0,
    Other: 0,
  };

  currentMonthExpenses.forEach(({ category, value }) => {
    if (category === "Food") {
      sumOfExpensesByCategory[category] += value;
    } else if (category === "Rent") {
      sumOfExpensesByCategory[category] += value;
    } else if (category === "Construction") {
      sumOfExpensesByCategory[category] += value;
    } else if (category === "Shopping") {
      sumOfExpensesByCategory[category] += value;
    } else if (category === "Pets") {
      sumOfExpensesByCategory[category] += value;
    } else if (category === "Car") {
      sumOfExpensesByCategory[category] += value;
    } else if (category === "Vacation") {
      sumOfExpensesByCategory[category] += value;
    } else if (category === "School") {
      sumOfExpensesByCategory[category] += value;
    } else if (category === "Other") {
      sumOfExpensesByCategory[category] += value;
    }
  });

  let arr = [];
  for (const [key, value] of Object.entries(sumOfExpensesByCategory)) {
    arr.push({ name: key, value });
  }

  return arr;
};

const ExpensesPieChart = () => {
  const currentMonthExpenses = useSelector(selectCurrentMonthExpenses);

  const sumOfExpensesByCategory = useMemo(
    () => calculateOfFixedEvents(currentMonthExpenses),
    [currentMonthExpenses]
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <div className={styles.container}>
      <Heading value="Expenses by catagories" type={Heading.types.h2} />
      {!currentMonthExpenses.length ? (
        <>
          <Heading
            className={styles.heading}
            type={Heading.types.h2}
            value="No Expenses Found"
            size="small"
            customColor={"grey"}
          />
          <img src={magnifyingGlass} className={styles.img} alt="" />
        </>
      ) : (
        <>
          <Heading
            className={styles.heading}
            type={Heading.types.h2}
            value="This month your expenses was :"
            size="small"
          />
          <PieChart width={500} height={360}>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={sumOfExpensesByCategory}
              cx={250}
              cy={150}
              innerRadius={60}
              outerRadius={80}
              fill={COLORS[COLORS.length]}
              dataKey="value"
              onMouseEnter={onPieEnter}
            >
              {sumOfExpensesByCategory.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </>
      )}
    </div>
  );
};

export default ExpensesPieChart;

function renderActiveShape(props) {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    name,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`${name}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`${value.toFixed(2)}₪`}
      </text>
    </g>
  );
}
