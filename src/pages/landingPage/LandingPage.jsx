import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { Heading, Divider } from "monday-ui-react-core";

import { selectUser, selectIsLoading } from "../../redux/user/selectors";
import { APP_ROUTES, ABOUT_INFO } from "../../helpers/constants";
import Loader from "../../components/loader/Loader";
import logo from "../../assets/up_logo.png";
import pic from "../../assets/pic.png";
import CardsContainer from "../../components/cardsContainer/CardsContainer";
import Card from "../../components/card/Card";
import UsersView from "./components/UsersView";
import CalenderView from "./components/CalenderView";
import BottomBar from "../../components/bottomBar/BottomBar";
import styles from "./landingPage.module.css";

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
            <NavLink
              className={styles.navLink}
              to={APP_ROUTES.LOGIN}
              style={({ isActive }) => ({
                color: isActive ? "green" : "black",
                textDecoration: "none",
              })}
            >
              Login
            </NavLink>
            <NavLink
              className={styles.navLink}
              to={APP_ROUTES.REGISTER}
              style={({ isActive }) => ({
                color: isActive ? "green" : "black",
                textDecoration: "none",
              })}
            >
              Register
            </NavLink>
          </span>
          <CardsContainer>
            <Card>
              <div className={styles.container}>
                <Heading
                  type={Heading.types.h1}
                  className={styles.Heading}
                  value="Ready to start managing your business ?"
                  brandFont
                />
                <img src={logo} alt="Logo" className={styles.logo2} />
                <Card className={styles.container2}>
                  <img src={pic} alt="pic" className={styles.pic} />
                  <p className={styles.text}>{ABOUT_INFO.DESCRIPTION}</p>
                </Card>
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
                    <UsersView />
                  </Card>
                </CardsContainer>
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
              </div>
              <BottomBar />
            </Card>
          </CardsContainer>
        </div>
      )}
    </>
  );
};

export default LandingPage;
