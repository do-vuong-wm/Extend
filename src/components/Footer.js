import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends React.Component{

  render(){

    return(
        <div className="footer-container">
          <FontAwesomeIcon className="social-icons" icon={['fab', 'twitter']} />
          <FontAwesomeIcon className="social-icons" icon={['fab', 'facebook']} />
          <FontAwesomeIcon className="social-icons" icon={['fab', 'instagram']} />
        </div>
    );

  }

}

export default Footer;
