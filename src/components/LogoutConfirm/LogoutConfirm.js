
import { NavLink } from 'react-router-dom';
import styles from './LogoutConfirm.module.css';

export default function LogoutConfirm() {
    // const dispatch = useDispatch();
//в button onclick маж бути операція логауту яка експортується з редаксу
    return (
        <div className={styles.confirmContainer}>
            <p className={styles.text}>Вы уверены?</p>
            <div>
                <button
                    className={styles.btn}
                    type="button"
                >
                    <span>Выйти</span>
                </button>
                <NavLink to="/home" className={styles.btn}>
                    <span>Отмена</span>
                </NavLink>
            </div>
        </div>
    );
}