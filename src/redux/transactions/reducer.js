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
    // request
    case ACTION_TYPES.SUBMIT_TRANSACTION:
    case ACTION_TYPES.EDIT_TRANSACTION:
    case ACTION_TYPES.DELETE_TRANSACTION:
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

    // fixed - success
    // submit
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

    // edit
    case ACTION_TYPES.EDIT_FIXED_TRANSACTION_SUCCESS: {
      const { id, edittedValues, successMessage } = payload;
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        successMessage,
        isError: false,
        errorMessage: "",
        fixed: state.fixed.map((currFixed) =>
          currFixed.id === id ? { ...currFixed, ...edittedValues } : currFixed
        ),
      };
    }

    // delete
    case ACTION_TYPES.DELETE_FIXED_TRANSACTION_SUCCESS: {
      const { id, successMessage } = payload;
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        successMessage,
        isError: false,
        errorMessage: "",
        fixed: state.fixed.filter((currFixed) => currFixed.id !== id),
      };
    }

    // fetch all
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

    // account - success
    // submit
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

    // edit
    case ACTION_TYPES.EDIT_ACCOUNT_TRANSACTION_SUCCESS: {
      const { id, edittedValues, successMessage } = payload;
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        successMessage,
        isError: false,
        errorMessage: "",
        account: state.account.map((currAccount) =>
          currAccount.id === id
            ? { ...currAccount, ...edittedValues }
            : currAccount
        ),
      };
    }

    // delete
    case ACTION_TYPES.DELETE_ACCOUNT_TRANSACTION_SUCCESS: {
      const { id, successMessage } = payload;
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        successMessage,
        isError: false,
        errorMessage: "",
        account: state.account.filter((currAccount) => currAccount.id !== id),
      };
    }

    // fetch all
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

    // fail
    case ACTION_TYPES.SUBMIT_TRANSACTION_FAIL:
    case ACTION_TYPES.EDIT_TRANSACTION_FAIL:
    case ACTION_TYPES.DELETE_TRANSACTION_FAIL:
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
