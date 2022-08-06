import { createSelector } from "reselect";

import { TRANSACTIONS_TYPES } from "../../../helpers/constants";
import { selectMonth } from "../../date/selectors";
import { getDayOfMonth } from "../../../helpers/dateTimeUtils";

export const selectFixedTransactions = (state) => state.transactionsState.fixed;

export const selectFixed = createSelector(
  selectFixedTransactions,
  selectMonth,
  (fixed, selectedMonth) => {
    const currMonth = new Date().getMonth();
    if (selectedMonth === currMonth) {
      const currDayOfMonth = getDayOfMonth();
      return fixed.filter((currFixed) => currFixed.dayOfMonth > currDayOfMonth);
    } else if (selectedMonth > currMonth) {
      return fixed;
    } else if (selectedMonth < currMonth) {
      return [];
    }
  }
);

export const selectFixedExpenses = createSelector(selectFixed, (fixed) => {
  return fixed.filter(
    (currFixed) => currFixed.type === TRANSACTIONS_TYPES.EXPENSE
  );
});
