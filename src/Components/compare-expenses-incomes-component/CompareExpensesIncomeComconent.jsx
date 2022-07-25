import React from "react";
import styles from "./CompareExpenesIncomeComponent.module.scss";

import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from "recharts";

const data = [
	{
		name: "Month",
		Expenses: 4000,
		Incomes: 2400,
		amt: 1000,
	},
];

export default function CompareExpenesIncomes() {
	return (
		<div className={styles.container}>
			<BarChart
				width={300}
				height={300}
				data={data}
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
}
