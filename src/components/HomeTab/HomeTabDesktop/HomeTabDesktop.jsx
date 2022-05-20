import { useSelector } from 'react-redux';
import { getAllTransactions } from '../../../redux/finance/finance-selectors';
import s from './HomeTabDesktop.module.css';

const HomeTabDesktop = () => {
    const transactions = useSelector(state => getAllTransactions(state));
    let filterTrans = [...transactions];
    filterTrans.sort((a, b) => (a.date > b.date ? -1 : 1));
    return (
        <div className={s.container}>
            <table className={s.table}>
                <thead className={s.thead}>
                    <tr className={s.tr}>
                        <th className={s.border__start}>Дата</th>
                        <th>Тип</th>
                        <th>Категория</th>
                        <th>Комментарий</th>
                        <th>Сумма</th>
                        <th>Баланс</th>
                    </tr>
                </thead>
                <tbody className={s.tbody}>
                    {transactions?.map(item => {
                        const text = item.isExpense ? '-' : '+';
                        const colorTxt = item.isExpense ? s.lose : s.profit;

                        return (
                            <tr key={item.id} className={s.tr}>
                                <td>{item.date_str}</td>
                                <td>{text}</td>
                                <td>{item.category.name}</td>
                                <td>{item.comment}</td>
                                <td className={colorTxt}>{item.amount}</td>
                                <td>{item.balanceAfter}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default HomeTabDesktop;