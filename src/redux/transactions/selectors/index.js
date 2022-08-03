export const selectIsLoading = (state) => state.transactionsState.isLoading;

export const selectIsSuccess = (state) => state.transactionsState.isSuccess;
export const selectSuccessMessage = (state) =>
  state.transactionsState.successMessage;

export const selectIsError = (state) => state.transactionsState.isError;
export const selectErrorMessage = (state) =>
  state.transactionsState.errorMessage;
