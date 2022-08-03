import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { Heading } from "monday-ui-react-core";

import { APP_ROUTES } from "../../helpers/constants";
import { selectUser } from "../../redux/user/selectors";
import RegisterForm from "./components/RegisterForm";
import styles from "./registerPage.module.css";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(selectUser);

  useEffect(() => {
    if (user) {
      navigate(APP_ROUTES.UP_YOUR_LIFE);
    }
  }, [dispatch, navigate, user]);

  return (
    <div className={styles.container}>
      <Heading value="Register" />
      <div className={styles.formContainer}>
        <RegisterForm />
      </div>
      <div className={styles.linkContainer}>
        <NavLink to={APP_ROUTES.LOGIN}>Back to login</NavLink>
      </div>
    </div>
  );
};

export default RegisterPage;
