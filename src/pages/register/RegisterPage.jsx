import { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import Loader from "../../components/loader/Loader";
import { APP_ROUTES } from "../../helpers/constants";
import { selectIsLoading, selectUser } from "../../redux/user/selectors";
import logo from "../../assets/up_logo.png";
import RegisterForm from "./components/RegisterForm";
import styles from "./registerPage.module.css";

const RegisterPage = () => {
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
        <div className={styles.container}>
          <img src={logo} alt="" className={styles.logo} />
          <div className={styles.formContainer}>
            <RegisterForm />
          </div>
          <div className={styles.linkContainer}>
            <NavLink to={APP_ROUTES.LOGIN}>Back to login</NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default RegisterPage;
