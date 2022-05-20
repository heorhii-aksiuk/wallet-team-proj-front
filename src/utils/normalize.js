export const normalizeNum = (str) => {
  return str?.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')
}
