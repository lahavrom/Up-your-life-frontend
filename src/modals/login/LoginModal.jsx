import AppModal from "../../components/modal/AppModal";
import LoginForm from "./components/LoginForm";
import styles from "./loginModal.module.css";
import { Heading } from "monday-ui-react-core";

const LoginModal = ({ isOpen, onClose }) => {
  return (
    <AppModal isOpen={isOpen} onClose={onClose}>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <Heading value="Login" className={styles.header} />
          <LoginForm />
        </div>
      </div>
    </AppModal>
  );
};

export default LoginModal;
