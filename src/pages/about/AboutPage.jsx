import { Heading, Avatar, Icon, Divider } from "monday-ui-react-core";
import Email from "monday-ui-react-core/dist/icons/Email";

import { ABOUT_INFO } from "../../helpers/constants";
import lahavPic from "../../assets/lahav_pic.png";
import nitzanPic from "../../assets/nitzan_pic.png";
import ayeletPic from "../../assets/ayelet_pic.png";
import itayPic from "../../assets/user.png";
import logo from "../../assets/up_logo.png";
import CardsContainer from "../../components/cardsContainer/CardsContainer";
import Card from "../../components/card/Card";

import ProfileButton from "../../components/topBar/components/ProfileButton";
import BottomBar from "../../components/bottomBar/BottomBar";

import styles from "./aboutPage.module.css";

const AboutPage = () => {
	return (
		<div>
			<span className={styles.topBar}>
				<img src={logo} alt="Logo" className={styles.logo} />
				<ProfileButton className={styles.ProfileButton} />
			</span>
			<CardsContainer>
				<Card>
					<div className={styles.container}>
						<Heading
							type={Heading.types.h1}
							className={styles.Heading}
							value="Our App"
							brandFont
						/>
						<p>{ABOUT_INFO.DESCRIPTION}</p>
						<Divider direction={Divider.directions.HORIZONTAL} />
						<Heading
							type={Heading.types.h1}
							className={styles.Heading}
							value="Our Features"
							brandFont
						/>
						<div className={styles.list}>
							<div className={styles.listItem}>
								<Icon
									iconType={Icon.type.SRC}
									icon="https://cdn.monday.com/images/apps/custom-icons/Form.svg"
									iconLabel="my src awesome icon"
									customColor={"green"}
								/>
								<Heading
									type={Heading.types.h3}
									size="small"
									value="Multiple users per account"
									brandFont
								/>
							</div>
							<div className={styles.listItem}>
								<Icon
									iconType={Icon.type.SRC}
									icon="https://cdn.monday.com/images/apps/custom-icons/Form.svg"
									iconLabel="my src awesome icon"
									customColor={"green"}
								/>
								<Heading
									type={Heading.types.h3}
									size="small"
									value="Show expenses by categories"
									brandFont
								/>
							</div>
							<div className={styles.listItem}>
								<Icon
									iconType={Icon.type.SRC}
									icon="https://cdn.monday.com/images/apps/custom-icons/Form.svg"
									iconLabel="my src awesome icon"
									customColor={"green"}
								/>
								<Heading
									type={Heading.types.h3}
									size="small"
									value="Show incomes by categories"
									brandFont
								/>
							</div>
						</div>
						<Divider direction={Divider.directions.HORIZONTAL} />
						<Heading
							type={Heading.types.h1}
							className={styles.Heading}
							value="About Us"
							brandFont
						/>
						<div className={styles.img}>
							<Avatar ariaLabel="Lahav Rom" src={lahavPic} type="img" />
							<Avatar ariaLabel="Itay Gur" src={itayPic} type="img" />
							<Avatar ariaLabel="Ayelet Shamgar" src={ayeletPic} type="img" />
						</div>
						<Heading
							type={Heading.types.h4}
							value="And thanks to our amazing mentor"
							brandFont
						/>
						<Avatar
							ariaLabel="Nitzan Ezra"
							src={nitzanPic}
							type="img"
							className={styles.img}
						/>
						<Divider direction={Divider.directions.HORIZONTAL} />
						<Heading
							type={Heading.types.h4}
							size="small"
							value="Join our new idea to help you Up Your Life!"
							brandFont
							customColor={"green"}
						/>
						<Heading
							type={Heading.types.h3}
							size="small"
							value="Contact Us on UpYourLife@gmail.com"
							brandFont
						/>
						<Icon
							iconType={Icon.type.SRC}
							iconLabel="my src awesome icon"
							customColor={"green"}
							icon={Email}
						/>
					</div>
					<BottomBar />
				</Card>
			</CardsContainer>
		</div>
	);
};

export default AboutPage;
