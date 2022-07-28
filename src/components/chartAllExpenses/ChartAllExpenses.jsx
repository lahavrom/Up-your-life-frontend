import React, { useCallback, useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PieChart, Pie, Cell, Sector } from "recharts";
import { Heading } from "monday-ui-react-core";

import { fetchAllFixedEvents } from "../../redux/fixedEvents/actions/fetchAllFixedEvents";

import styles from "./chartAllExpenses.module.css";

function ChartAllExpenses() {
	const [activeIndex, setActiveIndex] = useState(0);
	const onPieEnter = useCallback(
		(_, index) => {
			setActiveIndex(index);
		},
		[setActiveIndex]
	);

	const dispatch = useDispatch();

	const fixedEvents = useSelector(
		(state) => state.fixedEventsState.fixedEvents
	);

	const calculateOfFixedEvents = (fixedEvents) => {
		const sumOfExpensesByCategory = {
			household: 0,
			car: 0,
			groceries: 0,
		};

		fixedEvents
			.filter(({ type }) => type === "expense")
			.forEach(({ category, value }) => {
				if (category === "household") {
					sumOfExpensesByCategory[category] += value;
				} else if (category === "car") {
					sumOfExpensesByCategory[category] += value;
				} else if (category === "groceries") {
					sumOfExpensesByCategory[category] += value;
				}
			});

		let arr = [];
		for (const [key, value] of Object.entries(sumOfExpensesByCategory)) {
			arr.push({ name: key, value });
		}

		return arr;
	};
	//

	const sumOfExpensesByCategory = useMemo(
		() => calculateOfFixedEvents(fixedEvents),
		[fixedEvents]
	);
	const COLORS = ["#D9ED92", "#76C893", "#168AAD", "#1A759F", "#184E77"];
	useEffect(() => {
		dispatch(fetchAllFixedEvents("1"));
	}, [dispatch]);

	return (
		<div className={styles.container}>
			<Heading value="Expenses amount by catagories" type={Heading.types.h2} />
			<Heading
				type={Heading.types.h2}
				value="This month you spend your money on :"
				size="small"
			/>
			<PieChart width={500} height={360}>
				<Pie
					activeIndex={activeIndex}
					activeShape={renderActiveShape}
					data={sumOfExpensesByCategory}
					cx={200}
					cy={200}
					innerRadius={60}
					outerRadius={80}
					fill={COLORS[COLORS.length]}
					dataKey="value"
					onMouseEnter={onPieEnter}
				>
					{sumOfExpensesByCategory.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>
			</PieChart>
		</div>
	);
}

export default ChartAllExpenses;

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
		percent,
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
