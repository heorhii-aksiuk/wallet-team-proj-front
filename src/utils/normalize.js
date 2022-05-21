export const normalizeNum = (str) => {
  return str?.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')
}
