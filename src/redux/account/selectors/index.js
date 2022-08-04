export const selectIsLoading = (state) => state.accountState.isLoading;

export const selectIsSuccess = (state) => state.accountState.isSuccess;
export const selectSuccessMessage = (state) =>
  state.accountState.successMessage;

export const selectIsError = (state) => state.accountState.isError;
export const selectErrorMessage = (state) => state.accountState.errorMessage;

export const selectUsers = (state) => state.accountState.users;
