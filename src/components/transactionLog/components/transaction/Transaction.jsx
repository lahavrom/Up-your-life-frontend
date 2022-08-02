import styles from "./transaction.module.css";
import { Heading, IconButton } from "monday-ui-react-core";
import TransactionIcons from "../transactionIcons/TransactionIcons";
import TransactionAvatar from "../transactionAvatar/TransactionAvatar";
import { CATEGORY_ICONS } from "../../../../helpers/categoryIcons";

const Transaction = ({ transaction, onEditTransaction }) => {
  const { description, value, type, category, date } = transaction;

  return (
    <>
      <td>
        <TransactionAvatar />
      </td>
      <td>
        <Heading
          className={styles.currentTrans}
          value={date}
          type={Heading.types.h5}
          key={value}
        />
      </td>
      <td>
        <IconButton
          icon={CATEGORY_ICONS[category]}
          tooltipContent={category}
          className={styles.categoryIcon}
        />
      </td>
      <td>
        <Heading
          className={styles.currentTrans}
          value={description}
          type={Heading.types.h5}
          key={value}
        />
      </td>
      <td>
        <Heading
          className={styles.currentTrans}
          customColor={type === "Expense" ? "#d83a52" : "#258750"}
          value={type === "Income" ? `+ ${value}$` : `- ${value}$`}
          type={Heading.types.h5}
          key={value}
        />
      </td>
      <td className={styles.icons}>
        <TransactionIcons
          onEditTransaction={() => onEditTransaction(transaction)}
        />
      </td>
    </>
  );
};

export default Transaction;
