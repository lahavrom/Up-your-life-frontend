import {
  DialogContentContainer,
  Heading,
  Flex,
  Button,
} from "monday-ui-react-core";
import styles from "./expenses.module.css";

const Expenses = () => {
  return (
    <>
      <Heading value="Expenses" type={Heading.types.h2} />
      <div className={styles.cardContentContainer}>
        <DialogContentContainer className={styles.cardStartContentContainer}>
          <Flex align={Flex.align.CENTER} justify={Flex.justify.SPACE_BETWEEN}>
            <Heading value="Fixed" type={Heading.types.h3} />
            <Button>Add</Button>
          </Flex>
        </DialogContentContainer>
        <DialogContentContainer className={styles.cardEndContentContainer}>
          <Flex>
            <Heading value="Variable" type={Heading.types.h3} />
          </Flex>
        </DialogContentContainer>
      </div>
    </>
  );
};

export default Expenses;
