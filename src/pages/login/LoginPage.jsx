import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Heading } from "monday-ui-react-core";

import ErrorToast from "../../components/ErrorToast";
import LoginForm from "./components/LoginForm";
import { AUTH_ROUTES } from "../../routes/AuthRoutes";
import styles from "./loginPage.module.css";

const LoginPage = () => {
  const isError = useSelector(({ usersState }) => usersState.isError);
  const errorMessage = useSelector(({ usersState }) => usersState.errorMessage);

  return (
    <div className={styles.container}>
      <ErrorToast isVisible={isError} message={errorMessage} />
      <Heading value="Login" />
      <div className={styles.formContainer}>
        <LoginForm />
      </div>
      <div className={styles.linkContainer}>
        <Link to={AUTH_ROUTES.REGISTER}>Need to register?</Link>
      </div>
    </div>
  );
};

export default LoginPage;
