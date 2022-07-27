import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Heading } from "monday-ui-react-core";

import ErrorToast from "../../components/ErrorToast";
import LoginForm from "./components/LoginForm";
import styles from "./loginPage.module.css";

const LoginPage = () => {
  const isError = useSelector(({ usersState }) => usersState.isError);
  const errorMessage = useSelector(({ usersState }) => usersState.errorMessage);

  return (
    <div className={styles.container}>
      <ErrorToast isVisible={isError} message={errorMessage} />
      <Heading value="Login" />
      <LoginForm />
      <Link to="/register">Need to register?</Link>
    </div>
  );
};

export default LoginPage;
