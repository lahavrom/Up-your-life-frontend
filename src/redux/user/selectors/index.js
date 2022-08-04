export const selectIsLoading = (state) => state.userState.isLoading;

export const selectIsSuccess = (state) => state.userState.isSuccess;
export const selectSuccessMessage = (state) => state.userState.successMessage;

export const selectIsError = (state) => state.userState.isError;
export const selectErrorMessage = (state) => state.userState.errorMessage;

export const selectUser = (state) => state.userState.user;
