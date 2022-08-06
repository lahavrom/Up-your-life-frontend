import { createSelector } from "reselect";

import { CATEGORIES } from "../../../helpers/constants";
import { selectFixedExpenses } from "./selectFixed";
import { selectAccountExpenses } from "./selectAccount";

export const selectSumOfExpensesByCategory = createSelector(
  selectFixedExpenses,
  selectAccountExpenses,
  (fixed, account) => {
    let sumObj = {};
    Object.values(CATEGORIES).forEach((category) => {
      const categorySumObj = { [category]: 0 };
      sumObj = Object.assign(sumObj, categorySumObj);
    });

    [...fixed, ...account].forEach(({ category, value }) => {
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
