import React from 'react';
import './Navbar.css';

class Navbar extends React.Component{

  render(){

    return(

        <div className="Navbar">
        <div className="Logo"> <p>Extend Web Design</p> </div>
        <div className="HomeButton"> <a href="localhost:3000">Home</a> </div>
        </div>

    );

  }

}

export default Navbar;
