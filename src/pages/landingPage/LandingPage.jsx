import { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Heading, Divider, Tab, Button } from "monday-ui-react-core";

import LoginModal from "../../modals/login/LoginModal";
import RegisterModal from "../../modals/register/RegisterModal";
import ErrorToast from "../../components/toasts/ErrorToast";
import {
  selectIsLoading,
  selectIsSuccess,
  selectIsError,
  selectErrorMessage,
} from "../../redux/user/selectors";
import { APP_ROUTES } from "../../helpers/constants";
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
  const isSuccess = useSelector(selectIsSuccess);
  const isError = useSelector(selectIsError);
  const errorMessage = useSelector(selectErrorMessage);

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const onOpenLoginModal = useCallback(() => {
    setIsLoginModalOpen(true);
  }, []);

  const onCloseLoginModal = useCallback(() => {
    setIsLoginModalOpen(false);
  }, []);

  const onOpenRegisterodal = useCallback(() => {
    setIsRegisterModalOpen(true);
  }, []);

  const onCloseRegisterModal = useCallback(() => {
    setIsRegisterModalOpen(false);
  }, []);

  useEffect(() => {
    if (isSuccess) {
      navigate(APP_ROUTES.UP_YOUR_BIZ);
    }
  }, [navigate, isSuccess]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ErrorToast isVisible={isError} message={errorMessage} />
          <span className={styles.topBar}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <span>
              <span className={styles.topBarButtonContainer}>
                <Tab onClick={onOpenLoginModal}>Login</Tab>
              </span>
              <Tab onClick={onOpenRegisterodal}>Register</Tab>
            </span>
          </span>
          <div className={styles.container}>
            <CardsContainer>
              <div className={styles.container2}>
                <div className={styles.container3}>
                  <img src={pic} alt="pic" className={styles.pic} />
                  <div style={{ textAlign: "center" }}>
                    <p className={`${styles.text} ${styles.Heading}`}>
                      Start managing your cash flow{" "}
                      <span className={styles.colorText}>correctly</span>
                    </p>
                    <Button onClick={onOpenRegisterodal}>Join now!</Button>
                  </div>
                </div>
                <div className={styles.container3}>
                  <div style={{ textAlign: "center" }}>
                    <p className={styles.text}>
                      <span className={styles.colorText}>Up Your Biz</span> will
                      save you money by tracking all of your expenses and
                      incomes
                    </p>
                    <Button onClick={onOpenRegisterodal}>Join now!</Button>
                  </div>
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
          <LoginModal isOpen={isLoginModalOpen} onClose={onCloseLoginModal} />
          <RegisterModal
            isOpen={isRegisterModalOpen}
            onClose={onCloseRegisterModal}
          />
        </>
      )}
    </>
  );
};

export default LandingPage;
