import { createSelector } from "reselect";

import { TRANSACTIONS_TYPES } from "../../../helpers/constants";
import { selectFixed } from "../selectors/selectFixed";
import { selectAccount } from "../selectors/selectAccount";

export const selectSumOfTransactionsByType = createSelector(
  selectFixed,
  selectAccount,
  (fixed, account) => {
    let incomes = 0;
    let expenses = 0;
    [...fixed, ...account].forEach(({ type, value }) => {
      type === TRANSACTIONS_TYPES.INCOME
        ? (incomes += value)
        : (expenses += value);
    });
    return { incomes, expenses };
  }
);
