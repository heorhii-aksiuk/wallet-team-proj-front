const getIsLoading = (state) => state.global.isLoading

const getIsModalAddTransactionOpen = (state) =>
  state.global.isModalAddTransactionOpen

const getModalLogoutOpen = (state) => state.global.isModalLogoutOpen

export { getIsLoading, getIsModalAddTransactionOpen, getModalLogoutOpen }
