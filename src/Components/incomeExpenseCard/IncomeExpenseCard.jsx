import { DialogContentContainer, Heading, Flex, Button } from "monday-ui-react-core";
import styles from "./IncomeExpenseCard.module.css";
import { Add } from "monday-ui-react-core/dist/allIcons";

const IncomeExpenseCard = ({ flowType, setModalVisible, setAddType, setFixed }) => {

  const handleAdd = (fixed) => {
    setModalVisible(true);
    setAddType(flowType);
    fixed ? setFixed(true) : setFixed(false);
  }

  return (
    <>
      <Heading value={flowType} type={Heading.types.h2} />
      <div className={styles.cardContentContainer}>
        <DialogContentContainer className={styles.cardStartContentContainer}>
          <Flex align={Flex.align.CENTER} justify={Flex.justify.SPACE_BETWEEN}>
            <Heading value="Fixed" type={Heading.types.h3} />
            <Button className={styles.addBtn} onClick={() => handleAdd(true)} ><Add /></Button>
          </Flex>
        </DialogContentContainer>
        <DialogContentContainer className={styles.cardEndContentContainer}>
          <Flex align={Flex.align.CENTER} justify={Flex.justify.SPACE_BETWEEN}>
            <Heading value="Variable" type={Heading.types.h3} />
            <Button className={styles.addBtn} onClick={() => handleAdd(false)} ><Add /></Button>
          </Flex>
        </DialogContentContainer>
      </div>
    </>
  );
};

export default IncomeExpenseCard;
