import styles from "./transaction.module.css";
import { Heading, Divider, IconButton } from "monday-ui-react-core";
import TransactionIcons from "../transactionIcons/TransactionIcons";
import TransactionAvatar from "../transactionAvatar/TransactionAvatar";
import { CATEGORY_ICONS } from "../../../../helpers/categoryIcons";

const Transaction = ({ transaction, onEditTransaction }) => {
  const { description, value, date, type, category } = transaction;
  return (
    <>
      <div className={styles.transactions}>
        <TransactionAvatar />
        {[
          date,
          category,
          description,
          type === "Income" ? `+ ${value}$` : `- ${value}$`,
        ].map((value, i) => {
          return i === 1 ? (
            <IconButton
              icon={CATEGORY_ICONS[value]}
              tooltipContent={value}
              className={styles.categoryIcon}
            />
          ) : (
            <Heading
              className={styles.currentTrans}
              customColor={type === "Expense" ? "#d83a52" : "#258750"}
              value={value}
              type={Heading.types.h5}
              key={value}
            />
          );
        })}
        <TransactionIcons
          onEditTransaction={() => onEditTransaction(transaction)}
        />
      </div>
      <Divider />
    </>
  );
};

export default Transaction;
