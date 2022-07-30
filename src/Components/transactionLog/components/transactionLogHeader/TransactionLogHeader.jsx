import { useMemo } from "react";
import { Heading, Dropdown } from "monday-ui-react-core";
import styles from "./transactionLogHeader.module.css";

const TransactionLogHeader = ({ handleFilter }) => {
  const options = useMemo(
    () => [
      { value: "all", label: "Show All" },
      { value: "Expense", label: "Expenses" },
      { value: "Income", label: "Incomes" },
    ],
    []
  );

  return (
    <>
      <div className={styles.cardHeader}>
        <Heading value="Transactions" type={Heading.types.h3} />
        <Dropdown
          clearable={false}
          className={styles.filter}
          placeholder="Filter By"
          options={options}
          searchable={false}
          onChange={(value) => handleFilter(value.value)}
        />
      </div>
      <div className={styles.transactionsHeader}>
        {["Date", "Description", "Amount"].map((value) => (
          <Heading
            value={value}
            type={Heading.types.h4}
            className={styles.detailedTransHeader}
          />
        ))}
      </div>
    </>
  );
};

export default TransactionLogHeader;
