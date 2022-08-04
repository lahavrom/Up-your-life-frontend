import { DialogContentContainer, IconButton } from "monday-ui-react-core";
import CloseSmall from "monday-ui-react-core/dist/icons/CloseSmall";
import { Modal } from "@mui/material";

import styles from "./appModal.module.css";

const AppModal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        // <div className={styles.overlay}>
        <Modal
          open={isOpen}
          onClose={onClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className={styles.container}>
            <DialogContentContainer className={styles.contentContainer}>
              <div className={styles.closeButtonContainer}>
                <IconButton icon={CloseSmall} onClick={onClose} />
              </div>
              {children}
            </DialogContentContainer>
          </div>
        </Modal>
        // </div>
      )}
    </>
  );
};

export default AppModal;
