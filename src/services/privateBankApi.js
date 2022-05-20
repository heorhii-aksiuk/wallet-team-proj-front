import axios from 'axios'

const PRIVATE_BANK_URL =
  'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'

export const getListCurrency = () =>
  axios.get(`${PRIVATE_BANK_URL}`).then((res) => res.data)
