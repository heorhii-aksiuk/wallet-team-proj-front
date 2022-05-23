export const normalizeNum = (str) => {
  return str?.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')
}

export const normalizeNumDate = (date) => {
  if (date.toString().length === 1) {
    return '0' + date.toString()
  }
  return date.toString()
}

export const normalizeFormatDate = (date) => {
  return `${normalizeNumDate(date.getDate())}.${normalizeNumDate(
    date.getMonth() + 1,
  )}.${date.getFullYear()}`
}
