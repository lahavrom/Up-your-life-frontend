import AppModal from "../../components/modal/AppModal";
import RegisterForm from "./components/RegisterForm";
import styles from "./registerModal.module.css";

const RegisterModal = ({ isOpen, onClose }) => {
  return (
    <AppModal isOpen={isOpen} onClose={onClose}>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <RegisterForm />
        </div>
      </div>
    </AppModal>
  );
};

export default RegisterModal;
