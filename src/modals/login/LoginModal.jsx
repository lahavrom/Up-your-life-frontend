import AppModal from "../../components/modal/AppModal";
import LoginForm from "./components/LoginForm";
import styles from "./loginModal.module.css";

const LoginModal = ({ isOpen, onClose }) => {
  return (
    <AppModal isOpen={isOpen} onClose={onClose}>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <LoginForm />
        </div>
      </div>
    </AppModal>
  );
};

export default LoginModal;
