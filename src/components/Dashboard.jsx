import CardsContainer from "../components/cardsContainer/CardsContainer";
import Card from "../components/card/Card";
import CompareExpensesIncome from "../components/compareExpensesIncomes/CompareExpensesIncome";
import ExpensesPieChart from "../components/expensesPieChart/ExpensesPieChart";

const Dashboard = () => {
	return (
		<CardsContainer>
			<Card>
				<CompareExpensesIncome />
			</Card>
			<Card>
				<ExpensesPieChart />
			</Card>
		</CardsContainer>
	);
};

export default Dashboard;
