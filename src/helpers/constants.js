export const ERROR_MESSAGES = {
  DEFAULT:
    "Something went wrong, please try again in a few minutes or contact support",
};

export const ABOUT_INFO = {
  DESCRIPTION:
    "Up Your Biz helps your business save money by tracking your expenses and incomes",
  USERS: "Track account members expenses",
  FEATURES: [
    "Multiple users per account",
    "Show expenses by categories",
    "Show incomes by categories",
  ],
};

export const APP_ROUTES = {
  LANDING_PAGE: "/",
  UP_YOUR_BIZ: "/home",
};

export const SUCCESS_MESSAGES = {
  SUBMIT_TRANSACTION: "Transaction added successfully!",
  EDIT_TRANSACTION: "Transaction editted successfully!",
  DELETE_TRANSACTION: "Transaction deleted successfully!",
  UPDATE_USER_PROFILE_IMAGE: "Profile image updated successfully!",
};

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const DAYS_OF_MONTH = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];

export const CATEGORIES = {
  CAR: "Car",
  CONSTRUCTION: "Construction",
  FOOD: "Food",
  OTHER: "Other",
  PAYCHECK: "Paycheck",
  PETS: "Pets",
  RENT: "Rent",
  SCHOOL: "School",
  SHOPPING: "Shopping",
  VACATION: "Vacation",
};

export const CATEGORIES_COLORS = {
  Car: "#1C3879",
  Construction: "#DEB6AB",
  Food: "#C60F7B",
  Other: "#FFDEB4",
  Paycheck: "#FFF89C",
  Pets: "#FBB454",
  Rent: "#184E77",
  School: "#1A759F",
  Shopping: "#d89d6a",
  Vacation: "#168AAD",
};

export const TRANSACTIONS_TYPES = {
  INCOME: "Income",
  EXPENSE: "Expense",
};
