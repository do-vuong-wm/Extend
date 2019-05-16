import React from 'react';
import './Navbar.css';

class Navbar extends React.Component{

  render(){

    return(

        <div className="Navbar">
          <div className="Logo"> <a href="localhost:300-">Extend Web Design</a> </div>
          <div className="NavButtons">
            <button> Services </button>
            <button> About </button>
            <button> Contact </button>
            </div>
        </div>

    );

  }

}

export default Navbar;
