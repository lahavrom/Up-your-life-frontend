import { createSelector } from "reselect";

import { TRANSACTIONS_TYPES } from "../../../helpers/constants";
import { selectFixed } from "./selectFixed";
import { selectAccount } from "./selectAccount";
import { selectUsers } from "../../account/selectors";

export const selectTransactionsByDate = createSelector(
  selectFixed,
  selectAccount,
  selectUsers,
  (fixed, account, users) => {
    return [...fixed, ...account].map((transaction) => {
      const title = generateTitle(transaction, users);
      const date = generateDate(transaction);
      const color = generateColor(transaction);
      return {
        id: transaction.id,
        title,
        start: date,
        end: date,
        color,
      };
    });
  }
);

function generateTitle(transaction, users) {
  return `${getUserFirstNameByUserId(transaction.userId, users)} ${
    transaction.value
  }$ ${transaction.category}`;
}

function getUserFirstNameByUserId(userId, users) {
  const { firstName } = users.find((user) => user.userId === userId);
  return firstName;
}

function generateDate(transaction) {
  return transaction.dayOfMonth
    ? new Date().setDate(transaction.dayOfMonth)
    : transaction.effectiveDate;
}

function generateColor(transaction) {
  return transaction.type === TRANSACTIONS_TYPES.EXPENSE
    ? "#a25ddc"
    : "#76a388";
}
