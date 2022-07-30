import styles from "./transaction.module.css";
import { Heading, Divider, IconButton } from "monday-ui-react-core";
import { Add, Remove } from "monday-ui-react-core/dist/allIcons";

const Transaction = ({ description, amount, date, type }) => {
  return (
    <>
      <div className={styles.transactions}>
        {type === "income" ? (
          <IconButton icon={Add} className={styles.addIcon} />
        ) : (
          <IconButton icon={Remove} className={styles.removeIcon} />
        )}
        {[date, description, `${amount}$`].map((value) => {
          return (
            <Heading
              className={styles.currentTrans}
              customColor={type === "expense" ? "#d83a52" : "#258750"}
              value={value}
              type={Heading.types.h5}
            />
          );
        })}
      </div>
      <Divider />
    </>
  );
};

export default Transaction;
