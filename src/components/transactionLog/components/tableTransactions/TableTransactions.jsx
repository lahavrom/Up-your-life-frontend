import styles from "./tableTransactions.module.css";
import { Heading } from "monday-ui-react-core";
import Transaction from "../transaction/Transaction";
import { compareDates } from "../../../../helpers/dateTimeUtils";

const TableTransactions = ({
  transactions,
  futureTransactions,
  onEditTransaction,
}) => {
  return (
    <table className={styles.table}>
      <thead className={styles.header}>
        <tr>
          {["Person", "Date", "Category", "Description", "Amount"].map(
            (value) => (
              <th>
                <Heading
                  value={value}
                  type={Heading.types.h4}
                  className={styles.tableHeaders}
                />
              </th>
            )
          )}
          <th className={styles.mock}></th>
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        {futureTransactions
          .sort((a, b) => compareDates(a.date, b.date))
          .map((transaction) => (
            <tr
              key={transaction.id}
              className={`${styles.row} ${styles.futureTransaction}`}
            >
              <Transaction
                transaction={transaction}
                onEditTransaction={onEditTransaction}
              />
            </tr>
          ))}
        {transactions
          .sort((a, b) => compareDates(a.date, b.date))
          .map((transaction) => (
            <tr key={transaction.id} className={styles.row}>
              <Transaction
                transaction={transaction}
                onEditTransaction={onEditTransaction}
              />
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TableTransactions;
