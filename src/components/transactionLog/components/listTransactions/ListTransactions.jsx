import styles from "./listTransactions.module.css";
import Transaction from "../transaction/Transaction";
import { compareDates } from "../../../../helpers/utils";

const ListTransactions = ({ transactions }) => {
  return (
    <ul className={styles.listTransactions}>
      {transactions
        .sort((a, b) => compareDates(a.date, b.date))
        .map(({ description, value, date, type }) => (
          <li>
            <Transaction
              description={description}
              value={value}
              date={date}
              type={type}
              key={description}
            />
          </li>
        ))}
    </ul>
  );
};

export default ListTransactions;
