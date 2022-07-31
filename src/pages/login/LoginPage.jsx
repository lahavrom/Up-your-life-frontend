import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { Heading } from "monday-ui-react-core";

import LoginForm from "./components/LoginForm";
import { ROUTES } from "../../routes/AppRouter";
import styles from "./loginPage.module.css";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isSuccess = useSelector(({ usersState }) => usersState.isSuccess);

  useEffect(() => {
    if (isSuccess) {
      navigate(ROUTES.UP_YOUR_LIFE);
    }
  }, [dispatch, navigate, isSuccess]);

  return (
    <div className={styles.container}>
      <Heading value="Login" />
      <div className={styles.formContainer}>
        <LoginForm />
      </div>
      <div className={styles.linkContainer}>
        <NavLink to={ROUTES.REGISTER}>Need to register?</NavLink>
      </div>
    </div>
  );
};

export default LoginPage;
