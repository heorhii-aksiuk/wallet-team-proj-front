import React from "react";
import Media from 'react-media';
import RegistrationForm from "../components/RegistrationForm";
import { mediaQueries } from '../utils/constants.js';
import registerimg from '../assets/img/register-img.png'
import s from "./RegistrationPage.module.css";

// import {store} from '../redux/store'

const RegistrationPage = () => {
  // const { isAuth } = store.getState().session.isAuth;

  // console.log(store.getState().session.isAuth)
  return (
    <div className={s.container}>
    {/* <CommonContainer >       */}
        <div className={s.containerWrapper}>
          <Media queries={mediaQueries}> 
              {matches => (
                <>            
                  {matches.tablet &&                      
                      <div className={s.registerImgWrapper}>
                        <img src={registerimg}
                          alt="Девушка с телефоном в руках" 
                          width='274px' 
                          height='250px' 
                          className={ s.registerImg}/>
                          <p className={ s.appTitle}>Finance App</p>
                      </div>                   
                  }
                  {matches.desktop && 
                      <div className={s.registerImgWrapper}>
                          <img src={registerimg}
                            alt="Девушка с телефоном в руках" 
                            width='452px' 
                            height='413px' 
                            className={ s.registerImg}/>
                          <p className={ s.appTitle}>Finance App</p>
                      </div>}
              </>
            )} 
          </Media>       
          
          <div className={ s.form}>
            <RegistrationForm />
          </div>      
        </div>
      {/* </CommonContainer> */}
    </div>
  );
};

export default RegistrationPage;