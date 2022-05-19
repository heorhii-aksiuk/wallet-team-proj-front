import {useDispatch} from "react-redux";
import {logOut} from "../../redux/session/session-operations";
import { NavLink } from 'react-router-dom';
import styles from './LogoutConfirm.module.css';

export default function LogoutConfirm() {
    const dispatch = useDispatch();
    return (
        <div className={styles.confirmContainer}>
            <p className={styles.text}>Вы уверены?</p>
            <div>
                <button
                    className={styles.btn}
                    type="button"
                    onClick={() => dispatch(logOut)}
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