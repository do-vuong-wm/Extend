import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Navbar extends React.Component{

  render(){

    return(

        <div className="Navbar">
          <div className="Logo"> 
            <Link to='/' className="Logo-Link"> Extend Web Design </Link> 
          </div>
          <div className="NavButtons-Container">
            <div className="NavButtons-Menu">
              <FontAwesomeIcon icon="bars" size="2x"/>
            </div>
            <div className="NavButtons">
              <button> Services </button>
              <button> About </button>
              <Link to='/contact'><button> Contact </button></Link>
              </div>
            </div>
        </div>

    );

  }

}

export default Navbar;
