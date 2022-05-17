import {Navigate} from "react-router-dom";
import {store} from '../redux/store'
import routes from '../routes';

export const withAuthRedirect = Component => {
    const { isAuth } = store.getState().session.isAuth;
    // const from = Component.props?.state?.from?.pathname || routes.home

    // if (isAuth) {
    //     return <Navigate to={from} replace/>
    // }

    if (isAuth) { 
        return 
    }
    return Component
}