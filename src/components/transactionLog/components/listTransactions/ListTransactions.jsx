import styles from "./listTransactions.module.css";
import Transaction from "../transaction/Transaction";
import { compareDates } from "../../../../helpers/dateTimeUtils";

const ListTransactions = ({ transactions, onEditTransaction }) => {
  return (
    <ul className={styles.listTransactions}>
      {transactions
        .sort((a, b) => compareDates(a.date, b.date))
        .map(({ description, value, date, type, category, id, accountId }) => (
          <li key={id}>
            <Transaction
              description={description}
              value={value}
              date={date}
              type={type}
              key={description}
              category={category}
              id={id}
              accountId={accountId}
              onEditTransaction={onEditTransaction}
            />
          </li>
        ))}
    </ul>
  );
};

export default ListTransactions;
