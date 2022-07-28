import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Heading } from "monday-ui-react-core";

import ErrorToast from "../../components/toasts/ErrorToast";
import RegisterForm from "./components/RegisterForm";
import { AUTH_ROUTES } from "../../routes/AuthRoutes";
import styles from "./registerPage.module.css";

const RegisterPage = () => {
  const isError = useSelector(({ usersState }) => usersState.isError);
  const errorMessage = useSelector(({ usersState }) => usersState.errorMessage);

  return (
    <div className={styles.container}>
      <ErrorToast isVisible={isError} message={errorMessage} />
      <Heading value="Register" />
      <div className={styles.formContainer}>
        <RegisterForm />
      </div>
      <div className={styles.linkContainer}>
        <Link to={AUTH_ROUTES.LOGIN}>Back to login</Link>
      </div>
    </div>
  );
};

export default RegisterPage;
