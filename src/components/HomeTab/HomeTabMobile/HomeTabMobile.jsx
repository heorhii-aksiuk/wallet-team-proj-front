import { useSelector } from 'react-redux';
import { getAllTransactions } from '../../../redux/finance/finance-selectors';
import s from "./HomeTabMobile.module.css";

const HomeTabeMobile = () => {
  const transactions = useSelector(state => getAllTransactions(state));

  return (
    <div className={s.container}>
      {transactions?.map(item => {
        const border = item.isExpense ? '#ff6596' : '#24cca7';
        const text = item.isExpense ? '-' : '+';
        const colorTxt = item.isExpense ? s.lose : s.profit;
        return (
          <table
            key={item.id}
            className={s.item}
            style={{ borderColor: border }}
          >
            <tbody>
              <tr>
                <th>Дата</th>
                <td>{item.date_str}</td>
              </tr>
              <tr>
                <th>Тип</th>
                <td>{text}</td>
              </tr>
              <tr>
                <th>Категория</th>
                <td>{item.category.name}</td>
              </tr>
              <tr>
                <th>Комментарий</th>
                <td>{item.comment}</td>
              </tr>
              <tr>
                <th>Сумма</th>
                <td className={colorTxt}>{item.amount}</td>
              </tr>
              <tr>
                <th>Баланс</th>
                <td>{item.balanceAfter}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
};

export default HomeTabeMobile;