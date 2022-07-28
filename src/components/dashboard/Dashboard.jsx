import { DialogContentContainer, Flex } from "monday-ui-react-core";

import CompareExpensesIncome from "../compareExpensesIncomes/CompareExpensesIncome";
import ChartAllExpenses from "../chartAllExpenses/ChartAllExpenses";
import styles from "./dashboard.module.css";

const Dashboard = () => {
  return (
    <>
      <Heading id="dashboard" value="Dashboard" type={Heading.types.h2} />
		<div className={styles.cardContentContainer}>
			<DialogContentContainer className={styles.cardStartContentContainer}>
				<Flex direction={Flex.directions.COLUM}>
					<CompareExpensesIncome />
				</Flex>
			</DialogContentContainer>
			<DialogContentContainer className={styles.cardEndContentContainer}>
				<Flex direction={Flex.directions.COLUM}>
					<ChartAllExpenses />
				</Flex>
			</DialogContentContainer>
		</div>
	);
};

export default Dashboard;
