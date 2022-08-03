import { createSelector } from "reselect";

import { calculateSumsByType } from "../helpers/utils";
import { getDayOfMonth } from "../../../helpers/dateTimeUtils";

export const selectFixed = (state) => state.transactionsState.fixed;

export const selectFutureFixed = createSelector(selectFixed, (fixed) => {
  const currDayOfMonth = getDayOfMonth();
  return fixed.filter((currFixed) => currFixed.dayOfMonth > currDayOfMonth);
});

export const selectSumsOfFutureFixedByType = createSelector(
  selectFutureFixed,
  (fixed) => {
    return calculateSumsByType(fixed);
  }
);
