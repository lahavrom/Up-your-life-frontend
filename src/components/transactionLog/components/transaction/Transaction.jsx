import styles from "./transaction.module.css";
import { Heading, Divider, IconButton } from "monday-ui-react-core";
import { Add, Remove, Edit, Delete } from "monday-ui-react-core/dist/allIcons";

const Transaction = ({
  description,
  value,
  date,
  type,
  category,
  id,
  accountId,
  onEditTransaction,
}) => {
  return (
    <>
      <div className={styles.transactions}>
        {type === "Income" ? (
          <IconButton icon={Add} className={styles.addIcon} />
        ) : (
          <IconButton icon={Remove} className={styles.removeIcon} />
        )}
        {[date, description, `${value}$`].map((value) => {
          return (
            <Heading
              className={styles.currentTrans}
              customColor={type === "Expense" ? "#d83a52" : "#258750"}
              value={value}
              type={Heading.types.h5}
              key={value}
            />
          );
        })}
        <IconButton
          icon={Edit}
          tooltipContent="Edit Transaction"
          onClick={() =>
            onEditTransaction(
              type,
              description,
              value,
              category,
              date,
              id,
              accountId
            )
          }
        />
        <IconButton
          icon={Delete}
          tooltipContent="Delete Transaction"
          onClick={() => alert("delete")}
        />
      </div>
      <Divider />
    </>
  );
};

export default Transaction;
