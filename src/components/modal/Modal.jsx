import { DialogContentContainer } from "monday-ui-react-core";

import styles from "./modal.module.css";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen ? (
        <div className={styles.overlay}>
          <div className={styles.container}>
            <DialogContentContainer
              className={styles.contentContainer}
              size={DialogContentContainer.sizes.LARGE}
            >
              {children}
            </DialogContentContainer>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
