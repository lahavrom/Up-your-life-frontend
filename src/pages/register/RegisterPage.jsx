import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Heading } from "monday-ui-react-core";

import ErrorToast from "../../components/ErrorToast";
import RegisterForm from "./components/RegisterForm";
import styles from "./registerPage.module.css";

const RegisterPage = () => {
  const isError = useSelector(({ usersState }) => usersState.isError);
  const errorMessage = useSelector(({ usersState }) => usersState.errorMessage);

  return (
    <div className={styles.container}>
      <ErrorToast isVisible={isError} message={errorMessage} />
      <Heading value="Register" />
      <RegisterForm />
      <Link to="/">Back to login</Link>
    </div>
  );
};

export default RegisterPage;
