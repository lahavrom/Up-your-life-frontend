import CardsContainer from "../cardsContainer/CardsContainer";
import Card from "../card/Card";
import CalenderComponent from "../calenderComponent/CalenderComponent";

const CalenderContainer = () => {
	return (
		<CardsContainer>
			<Card>
				<CalenderComponent />
			</Card>
		</CardsContainer>
	);
};

export default CalenderContainer;
