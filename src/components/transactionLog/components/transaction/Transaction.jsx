import styles from "./transaction.module.css";
import { Heading, IconButton } from "monday-ui-react-core";
import TransactionIcons from "../transactionIcons/TransactionIcons";
import TransactionAvatar from "../transactionAvatar/TransactionAvatar";
import { CATEGORY_ICONS } from "../../../../helpers/categoryIcons";
import {
  makeDateFromDay,
  makeDateTimestamp,
} from "../../../../helpers/dateTimeUtils";
import { useSelector } from "react-redux";

const Transaction = ({ transaction, onEditTransaction }) => {
  const selectedMonth = useSelector(({ dateState }) => dateState.month);

  const { description, value, type, category, dayOfMonth, effectiveDate } =
    transaction;

  return (
    <>
      <td>
        <TransactionAvatar />
      </td>
      <td>
        <Heading
          className={styles.currentTrans}
          value={
            dayOfMonth
              ? makeDateFromDay(dayOfMonth, selectedMonth + 1)
              : makeDateTimestamp(effectiveDate)
          }
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
