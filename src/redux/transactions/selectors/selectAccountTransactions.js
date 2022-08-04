import { createSelector } from "reselect";

import { CATEGORIES, TRANSACTIONS_TYPES } from "../../../helpers/constants";
import { selectMonth } from "../../date/selectors";
import { getMonthFromTimestamp } from "../../../helpers/dateTimeUtils";
import { calculateSumsByType } from "../helpers/utils";

export const selectAccount = (state) => state.transactionsState.account;

// current month transactions
export const selectCurrMonthAccountTransactions = createSelector(
  selectAccount,
  selectMonth,
  (account, month) => {
    return account.filter(
      ({ effectiveDate }) => getMonthFromTimestamp(effectiveDate) === month
    );
  }
);

// current month transactions sum by type
export const selectSumsOfCurrMonthAccountByType = createSelector(
  selectCurrMonthAccountTransactions,
  (account) => {
    return calculateSumsByType(account);
  }
);

// current month expenses
export const selectCurrMonthAccountExpenses = createSelector(
  selectCurrMonthAccountTransactions,
  (account) => {
    return account.filter(({ type }) => type === TRANSACTIONS_TYPES.EXPENSE);
  }
);

// current month expenses by category
export const selectCurrMonthAccountExpensesByCategory = createSelector(
  selectCurrMonthAccountExpenses,
  (account) => {
    let sumObj = {};
    Object.values(CATEGORIES).forEach((category) => {
      const categorySumObj = { [category]: 0 };
      sumObj = Object.assign(sumObj, categorySumObj);
    });

    account.forEach(({ category, value }) => {
      sumObj[category] += value;
    });

    let sumArray = [];
    Object.entries(sumObj).forEach(([key, value]) => {
      if (value > 0) {
        sumArray = [...sumArray, { name: key, value }];
      }
    });
    return sumArray;
  }
);
