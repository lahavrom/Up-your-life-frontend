import { useMemo } from "react";
import { Heading, Dropdown, Checkbox, IconButton } from "monday-ui-react-core";
import { Info } from "monday-ui-react-core/dist/allIcons";
import styles from "./transactionLogHeader.module.css";

const TransactionLogHeader = ({
  handleFilter,
  showFutureTransactions,
  setShowFutureTransactions,
  flipCard,
  isFlipped,
}) => {
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
      <Heading
        value="Transactions"
        type={Heading.types.h3}
        className={styles.header}
      />
      <div className={styles.cardHeader}>
        <Dropdown
          clearable={false}
          className={styles.filter}
          placeholder="Filter By"
          options={options}
          searchable={false}
          onChange={(value) => handleFilter(value.value)}
        />
        <div>
          <div className={styles.checkBox}>
            <IconButton
              icon={Info}
              ariaLabel="Check the box to show future incomes and expenses"
              size={IconButton.sizes.SMALL}
            />
            <Checkbox
              label="Future Transactions"
              onChange={() =>
                setShowFutureTransactions(!showFutureTransactions)
              }
            />
          </div>
          <div className={styles.checkBox}>
            <IconButton
              icon={Info}
              ariaLabel="Check the box to show calender view"
              size={IconButton.sizes.SMALL}
            />
            <Checkbox
              label="Calendar View"
              checked={isFlipped}
              onChange={() => flipCard()}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionLogHeader;
