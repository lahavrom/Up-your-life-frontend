import { createSelector } from "reselect";

import { TRANSACTIONS_TYPES } from "../../../helpers/constants";
import { selectMonth } from "../../date/selectors";
import { getMonthFromTimestamp } from "../../../helpers/dateTimeUtils";

export const selectAccountTransactions = (state) =>
  state.transactionsState.account;

export const selectAccount = createSelector(
  selectAccountTransactions,
  selectMonth,
  (account, selectedMonth) => {
    const currMonth = new Date().getMonth();
    if (selectedMonth > currMonth) {
      return [];
    } else {
      return account.filter(
        ({ effectiveDate }) =>
          getMonthFromTimestamp(effectiveDate) === selectedMonth
      );
    }
  }
);

export const selectAccountExpenses = createSelector(
  selectAccount,
  (account) => {
    return account.filter(
      (currAccount) => currAccount.type === TRANSACTIONS_TYPES.EXPENSE
    );
  }
);
