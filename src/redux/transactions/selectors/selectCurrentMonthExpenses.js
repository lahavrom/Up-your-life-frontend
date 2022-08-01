import { createSelector } from "reselect";

import { getMonthFromTimestamp } from "../../../helpers/dateTimeUtils";

export const selectCurrentMonthExpenses = createSelector(
  (state) => state.transactionsState.account,
  (state) => state.dateState.month,
  (accountTransactions, selectedMonth) => {
    return accountTransactions
      .filter(({ type }) => type === "Expense")
      .filter(
        ({ effectiveDate }) =>
          getMonthFromTimestamp(effectiveDate) === selectedMonth
      );
  }
);
