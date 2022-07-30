import { DialogContentContainer, IconButton } from "monday-ui-react-core";
import CloseSmall from "monday-ui-react-core/dist/icons/CloseSmall";

import styles from "./modal.module.css";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className={styles.overlay}>
          <div className={styles.container}>
            <DialogContentContainer className={styles.contentContainer}>
              <IconButton icon={CloseSmall} onClick={onClose} />
              {children}
            </DialogContentContainer>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
