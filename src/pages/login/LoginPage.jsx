import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import Loader from "../../components/loader/Loader";
import { APP_ROUTES } from "../../helpers/constants";
import { selectIsLoading, selectUser } from "../../redux/user/selectors";
import LoginForm from "./components/LoginForm";
import logo from "../../assets/up_logo.png";
import styles from "./loginPage.module.css";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector(selectIsLoading);
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user) {
      navigate(APP_ROUTES.UP_YOUR_BIZ);
    }
  }, [dispatch, navigate, user]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.container}>
          <img src={logo} alt="" className={styles.logo} />
          <div className={styles.formContainer}>
            <LoginForm />
          </div>
          <div className={styles.linkContainer}>
            <NavLink to={APP_ROUTES.REGISTER}>Need to register?</NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPage;
