import { publicAxios } from '../redux/session/session-operations'

const PRIVATE_BANK_URL =
  'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5'

export const getListCurrency = async () => {
  let data
  await publicAxios.get(`${PRIVATE_BANK_URL}`).then((res) => {
    data = res.data
  })

  return data
}
