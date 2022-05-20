// import {Navigate} from "react-router-dom";
import { store } from '../redux/store';
// import routes from '../routes';
// import Redirect from 'react-router-dom';
import { useHistory, Redirect } from "react-router-dom";



const withAuthRedirect = Component => {
    const isAuth = store.getState().session.isAuth;

        console.log('11111', store.getState().session.isAuth)
    // const from = Component.props?.state?.from?.pathname || routes.home

    // if (isAuth) {
    //     return <Navigate to={from} replace/>
    // }
    // const history = useHistory();
   
    if (isAuth) {         
        // return history.push('/')
        return <Redirect to='/'/>
    }    
    return Component
}

export default withAuthRedirect