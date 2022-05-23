const getIsLoading = (state) => state.global.isLoading

const getIsModalAddTransactionOpen = (state) =>
  state.global.isModalAddTransactionOpen

const getIsModalUpdateTransactionOpen = (state) =>
  state.global.isModalUpdateTransactionOpen

const getModalLogoutOpen = (state) => state.global.isModalLogoutOpen

export {
  getIsLoading,
  getIsModalAddTransactionOpen,
  getIsModalUpdateTransactionOpen,
  getModalLogoutOpen,
}
