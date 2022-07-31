import { Heading, Avatar } from "monday-ui-react-core";

import { TEXT_INFO } from "../../helpers/constants";
import lahavPic from "../../assets/lahav_pic.png";
import orPic from "../../assets/or_pic.png";
import nitzanPic from "../../assets/nitzan_pic.png";
import ayeletPic from "../../assets/ayelet_pic.png";
import itayPic from "../../assets/itay2.png";
import CardsContainer from "../cardsContainer/CardsContainer";
import Card from "../card/Card";

import styles from "./aboutComponent.module.css";

const AboutComponent = () => {
	return (
		<CardsContainer>
			<Card>
				<div className={styles.container}>
					<Heading
						type={Heading.types.h1}
						className={styles.Heading}
						value="About Up Your Life"
						brandFont
					/>
					<p>{TEXT_INFO.DEFAULT}</p>
					<div className={styles.img}>
						<Avatar
							size={Avatar.sizes.LARGE}
							ariaLabel="Or Gamliel"
							src={orPic}
							type="img"
						/>
						<Avatar ariaLabel="Lahav Rom" src={lahavPic} type="img" />

						<Avatar ariaLabel="Itay Gur" src={itayPic} type="img" />
						<Avatar ariaLabel="Ayelet Shamgar" src={ayeletPic} type="img" />
					</div>
					<Heading
						type={Heading.types.h2}
						value="And thanks to our amazing mentor"
						brandFont
					/>
					<Avatar ariaLabel="Nitzan Ezra" src={nitzanPic} type="img" />
					<Heading
						type={Heading.types.h3}
						size="small"
						value="Join our new idea to help you Up Your Life!"
						brandFont
					/>
					<Heading
						type={Heading.types.h3}
						size="small"
						value="Contact Us on UpYourLife@gmail.com"
						brandFont
					/>
				</div>
			</Card>
		</CardsContainer>
	);
};

export default AboutComponent;
