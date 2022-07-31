import CardsContainer from "../components/cardsContainer/CardsContainer";
import Card from "../components/card/Card";
import CompareExpensesIncome from "../components/compareExpensesIncomes/CompareExpensesIncome";
import ChartAllExpenses from "../components/chartAllExpenses/ChartAllExpenses";

const Dashboard = () => {
  return (
    <CardsContainer>
      <Card>
        <CompareExpensesIncome />
      </Card>
      <Card>
        <ChartAllExpenses />
      </Card>
    </CardsContainer>
  );
};

export default Dashboard;
