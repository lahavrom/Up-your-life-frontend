import CardsContainer from "./cardsContainer/CardsContainer";
import Card from "./card/Card";
import AboutComponent from "./aboutComponent/AboutComponent";

const AboutContainer = () => {
	return (
		<CardsContainer>
			<Card>
				<AboutComponent />
			</Card>
		</CardsContainer>
	);
};

export default AboutContainer;
