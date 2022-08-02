import { createSelector } from "reselect";

import { CATEGORIES, TRANSACTIONS_TYPES } from "../../../helpers/constants";
import { currentMonth } from "../../date/selectors/selectCurrentMonth";
import { getMonthFromTimestamp } from "../../../helpers/dateTimeUtils";

export const accountTransactions = (state) => state.transactionsState.account;

export const currentMonthAccountTransactions = createSelector(
  accountTransactions,
  currentMonth,
  (accountTransactions, currentMonth) => {
    return accountTransactions.filter(
      ({ effectiveDate }) =>
        getMonthFromTimestamp(effectiveDate) === currentMonth
    );
  }
);

export const currentMonthAccountExpenses = createSelector(
  currentMonthAccountTransactions,
  (currentMonthAccountTransactions) => {
    return currentMonthAccountTransactions.filter(
      ({ type }) => type === TRANSACTIONS_TYPES.EXPENSE
    );
  }
);

export const currentMonthAccountExpensesSumsByCategory = createSelector(
  currentMonthAccountExpenses,
  (currentMonthAccountExpenses) => {
    let sumsOfExpensesByCategory = {};
    Object.values(CATEGORIES).forEach((category) => {
      const currentCategorySumObj = { [category]: 0 };
      sumsOfExpensesByCategory = Object.assign(
        sumsOfExpensesByCategory,
        currentCategorySumObj
      );
    });

    currentMonthAccountExpenses.forEach(({ category, value }) => {
      sumsOfExpensesByCategory[category] += value;
    });

    let sumsOfExpensesByCategoryArray = [];
    Object.entries(sumsOfExpensesByCategory).forEach(([key, value]) => {
      if (value > 0) {
        sumsOfExpensesByCategoryArray = [
          ...sumsOfExpensesByCategoryArray,
          { name: key, value },
        ];
      }
    });
    return sumsOfExpensesByCategoryArray;
  }
);
