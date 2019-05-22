import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends React.Component{

  render(){

    return(
        <div className="Footer-Container">
          <FontAwesomeIcon className="Social-Icons" icon={['fab', 'twitter']} />
          <FontAwesomeIcon className="Social-Icons" icon={['fab', 'facebook']} />
          <FontAwesomeIcon className="Social-Icons" icon={['fab', 'instagram']} />
        </div>
    );

  }

}

export default Footer;
