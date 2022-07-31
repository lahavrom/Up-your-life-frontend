import styles from "./listTransactions.module.css";
import Transaction from "../transaction/Transaction";

const ListTransactions = ({ transactions }) => {
  return (
    <ul className={styles.listTransactions}>
      {transactions.map(({ description, value, date, type }) => (
        <li>
          <Transaction
            description={description}
            value={value}
            date={date}
            type={type}
          />
        </li>
      ))}
    </ul>
  );
};

export default ListTransactions;
