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
                    {transactions.length === 0 && 
                        <tr key={1} className={s.tr}>
                                <td>Дата транзакции</td>
                                <td>+</td>
                                <td>Категория</td>
                                <td>Комментарий</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                    }
                    {transactions?.map(item => { console.log(item)
                        const text = item.income === false ? '-' : '+';
                        const colorTxt = item.income === false ? s.lose : s.profit;
                        
                        return (
                            <tr key={item.id} className={s.tr}>
                                <td>{item.date}</td>
                                <td>{text}</td>
                                <td>{item.category}</td>
                                <td>{item.comment}</td>
                                <td className={colorTxt}>{item.sum}</td>
                                <td>{item.balance}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default HomeTabDesktop;