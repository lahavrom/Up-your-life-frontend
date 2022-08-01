import styles from "./listTransactions.module.css";
import Transaction from "../transaction/Transaction";
import { compareDates } from "../../../../helpers/dateTimeUtils";

const ListTransactions = ({ transactions, onEditTransaction }) => {
  return (
    <ul className={styles.listTransactions}>
      {transactions
        .sort((a, b) => compareDates(a.date, b.date))
        .map((transaction) => (
          <li key={transaction.id}>
            <Transaction
              transaction={transaction}
              onEditTransaction={onEditTransaction}
            />
          </li>
        ))}
    </ul>
  );
};

export default ListTransactions;
