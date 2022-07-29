import { DialogContentContainer } from "monday-ui-react-core";

import styles from "./card.module.css";

const Card = ({ children }) => {
  return (
    <DialogContentContainer className={styles.container}>
      {children}
    </DialogContentContainer>
  );
};

export default Card;
