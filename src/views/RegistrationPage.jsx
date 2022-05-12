import React from "react";
import Media from 'react-media';
import RegistrationForm from "../components/RegistrationForm";
import "./RegistrationPage.scss";

const RegistrationPage = () => {
  return (
    <div>
        <Media queries={{
        //   small: "(max-width: 599px)",
          medium: "(min-width: 768) and (max-width: 1279)",
          large: "(min-width: 1280)"
        }}>
          {matches => (
            <Fragment>            
                {matches.medium &&
                    <div>
                        //image here
                        <p>Finance App</p>
                    </div>
                }
                {matches.large && 
                    <div>
                        //image here
                        <p>Finance App</p>
                    </div>}
            </Fragment>
          )}         
        </Media>       
        
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;