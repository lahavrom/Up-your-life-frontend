import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { Heading } from "monday-ui-react-core";

import RegisterForm from "./components/RegisterForm";
import { ROUTES } from "../../routes/AppRouter";
import styles from "./registerPage.module.css";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isSuccess = useSelector(({ userState }) => userState.isSuccess);

  useEffect(() => {
    if (isSuccess) {
      navigate(ROUTES.UP_YOUR_LIFE);
    }
  }, [dispatch, navigate, isSuccess]);

  return (
    <div className={styles.container}>
      <Heading value="Register" />
      <div className={styles.formContainer}>
        <RegisterForm />
      </div>
      <div className={styles.linkContainer}>
        <NavLink to={ROUTES.LOGIN}>Back to login</NavLink>
      </div>
    </div>
  );
};

export default RegisterPage;
