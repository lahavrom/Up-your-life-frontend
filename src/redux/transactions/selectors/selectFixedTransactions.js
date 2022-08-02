import { createSelector } from "reselect";

import { getDayOfMonth } from "../../../helpers/dateTimeUtils";

export const fixedTransactions = (state) => state.transactionsState.fixed;

export const futureFixedTransactions = createSelector(
  fixedTransactions,
  (fixedTransactions) => {
    const currentDayOfMonth = getDayOfMonth();
    return fixedTransactions.filter(
      (fixedTransaction) => fixedTransaction.dayOfMonth > currentDayOfMonth
    );
  }
);
