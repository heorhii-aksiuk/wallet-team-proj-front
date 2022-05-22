export const normalizeNum = (str) => {
  return str?.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')
}

export const normalizeFormatDate = (date) => {
  if (date.toString().length === 1) {
    return '0' + date.toString()
  }
  return date.toString()
}
