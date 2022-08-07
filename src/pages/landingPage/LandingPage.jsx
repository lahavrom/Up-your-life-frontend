import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { Heading, Divider } from "monday-ui-react-core";

import { selectUser, selectIsLoading } from "../../redux/user/selectors";
import { APP_ROUTES, ABOUT_INFO } from "../../helpers/constants";
import Loader from "../../components/loader/Loader";
import logo from "../../assets/up_logo.png";
import facebook from "../../assets/facebook.png";
import insta from "../../assets/instagram.png";
import pic from "../../assets/pic.png";
import hands from "../../assets/hands.png";
import CardsContainer from "../../components/cardsContainer/CardsContainer";
import Card from "../../components/card/Card";
import UsersView from "./components/UsersView";
import CalenderView from "./components/CalenderView";
import BottomBar from "../../components/bottomBar/BottomBar";
import styles from "./landingPage.module.css";
import PiggyBank from "./components/PiggyBank";

const LandingPage = () => {
  const navigate = useNavigate();

  const isLoading = useSelector(selectIsLoading);
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user) {
      navigate(APP_ROUTES.UP_YOUR_BIZ);
    }
  }, [navigate, user]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <span className={styles.topBar}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <div className={styles.nav}>
              <div className={styles.navItem}>
                <NavLink
                  to={APP_ROUTES.LOGIN}
                  style={{
                    color: "black",
                    borderBottom: "10px",
                    textDecoration: "none",
                    padding: "5px",
                  }}
                >
                  Login
                </NavLink>
              </div>
              <div className={styles.navItem}>
                <NavLink
                  to={APP_ROUTES.REGISTER}
                  style={{
                    color: "black",
                    borderBottom: "10px",
                    textDecoration: "none",
                    padding: "5px",
                  }}
                >
                  Register
                </NavLink>
              </div>
            </div>
          </span>
          <div className={styles.container}>
            <CardsContainer>
              <div className={styles.container2}>
                <div className={styles.container3}>
                  <img src={pic} alt="pic" className={styles.pic} />
                  <Heading
                    type={Heading.types.h1}
                    className={styles.Heading}
                    value="Ready to start managing your business ?"
                    brandFont
                  />
                </div>
                <div className={styles.container3}>
                  <p className={styles.text}>{ABOUT_INFO.DESCRIPTION}</p>
                  <img src={hands} alt="hands" className={styles.pic} />
                </div>
                <Divider direction={Divider.directions.HORIZONTAL} />
                <Heading
                  type={Heading.types.h1}
                  className={styles.Heading2}
                  value="Our Features"
                  brandFont
                />
                <CardsContainer>
                  <Card className={styles.container2}>
                    <UsersView />
                  </Card>
                  <Card className={styles.container2}>
                    <CalenderView />
                  </Card>
                  <Card className={styles.container2}>
                    <PiggyBank />
                  </Card>
                </CardsContainer>
                <Divider direction={Divider.directions.HORIZONTAL} />
                <span className={styles.iconsContainer}>
                  <Heading
                    type={Heading.types.h4}
                    size="small"
                    value="Follow Us on social media!"
                    brandFont
                    customColor={"black"}
                  />
                  <img src={facebook} alt="Logo" className={styles.icon} />
                  <img src={insta} alt="Logo" className={styles.icon} />
                </span>
              </div>
            </CardsContainer>
          </div>
          <BottomBar />
        </div>
      )}
    </>
  );
};

export default LandingPage;
