import { DialogContentContainer, Heading, Flex } from "monday-ui-react-core";
import styles from "./incomes.module.css";

const Incomes = () => {
  return (
    <>
      <Heading value="Incomes" type={Heading.types.h2} />
      <div className={styles.cardContentContainer}>
        <DialogContentContainer className={styles.cardStartContentContainer}>
          <Flex>
            <Heading value="Fixed" type={Heading.types.h3} />
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

export default Incomes;
