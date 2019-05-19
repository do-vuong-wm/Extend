import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends React.Component{

  render(){

    return(

        <div className="Navbar">
          <div className="Logo"> <Link to='/' className="Logo-Link"> Extend Web Design </Link> </div>
          <div className="NavButtons">
            <button> Services </button>
            <button> About </button>
            <Link to='/contact'><button> Contact </button></Link>
            </div>
        </div>

    );

  }

}

export default Navbar;
