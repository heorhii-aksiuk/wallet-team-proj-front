import React from "react";
import Media from 'react-media';
import RegistrationForm from "../components/RegistrationForm/RegistrationForm.jsx";
import CommonContainer from '../containers/CommonContainer';
import { mediaQueries } from '../utils/constants.js';
import registerimg from '../assets/img/register-img.png'
import s from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  return (
    <CommonContainer >
      <div className={s.container}>
        <Media queries={mediaQueries}>          
            {matches => (
            <>            
                {matches.tablet &&
                    <div className={s.registerImgWrapper}>
                      <img src={registerimg}
                        alt="Человек с тележкой продуктов" 
                        width='274px' 
                        height='250px' 
                        className={ s.registerImg}/>
                        <p className={ s.appTitle}>Finance App</p>
                    </div>
                }
                {matches.desktop && 
                    <div className={s.registerImgWrapper}>
                        <img src={registerimg}
                          alt="Человек с тележкой продуктов" 
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
    </CommonContainer>
  );
};

export default RegistrationPage;