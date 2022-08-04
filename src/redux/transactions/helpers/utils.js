import { TRANSACTIONS_TYPES } from "../../../helpers/constants";

export const calculateSumsByType = (transactions) => {
  let incomes = 0;
  let expenses = 0;
  transactions.forEach(({ type, value }) => {
    type === TRANSACTIONS_TYPES.INCOME
      ? (incomes += value)
      : (expenses += value);
  });
  return { incomes, expenses };
};
