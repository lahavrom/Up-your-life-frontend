import ACTION_TYPES from "./actions/constants/actionTypes";

const initialState = {
  isLoading: false,
  isSuccess: false,
  successMessage: "",
  isError: false,
  errorMessage: "",
  fixed: [],
  account: [],
};

const transactionsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.SUBMIT_TRANSACTION:
    case ACTION_TYPES.FETCH_ALL_FIXED_TRANSACTIONS:
    case ACTION_TYPES.FETCH_ALL_ACCOUNT_TRANSACTIONS: {
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        successMessage: "",
        isError: false,
        errorMessage: "",
      };
    }

    case ACTION_TYPES.SUBMIT_FIXED_TRANSACTION_SUCCESS: {
      const { transaction, successMessage } = payload;
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        successMessage,
        isError: false,
        errorMessage: "",
        fixed: [...state.fixed, transaction],
      };
    }

    case ACTION_TYPES.SUBMIT_ACCOUNT_TRANSACTION_SUCCESS: {
      const { transaction, successMessage } = payload;
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        successMessage,
        isError: false,
        errorMessage: "",
        account: [...state.account, transaction],
      };
    }

    case ACTION_TYPES.FETCH_ALL_FIXED_TRANSACTIONS_SUCCESS: {
      const { transactions } = payload;
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        successMessage: "",
        isError: false,
        errorMessage: "",
        fixed: transactions,
      };
    }

    case ACTION_TYPES.FETCH_ALL_ACCOUNT_TRANSACTIONS_SUCCESS: {
      const { transactions } = payload;
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        successMessage: "",
        isError: false,
        errorMessage: "",
        account: transactions,
      };
    }

    case ACTION_TYPES.SUBMIT_TRANSACTION_FAIL:
    case ACTION_TYPES.FETCH_ALL_FIXED_TRANSACTIONS_FAIL:
    case ACTION_TYPES.FETCH_ALL_ACCOUNT_TRANSACTIONS_FAIL: {
      const { errorMessage } = payload;
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        successMessage: "",
        isError: true,
        errorMessage,
      };
    }

    default: {
      return state;
    }
  }
};

export default transactionsReducer;
