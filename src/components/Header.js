import React, { Component, Fragment } from 'react';
//import axios from 'axios';
import './Header.css';

// it is state component now
class Header extends Component{
  // class constructor
  constructor(props){
    super(props);
    this.state = {users: []}; // component's data/object
  }
  //lifecycle methods
  componentDidMount(){
    this.getData();
  }

  componentWillUnmount(){
  }
  //component's functions

  getData = async () => {

    try{

    const response = await fetch("http://localhost:3001/api/get");

    const formattedResponse = await response.json();

    this.setState({users: formattedResponse})

    }catch(error){
      console.log('error:', error);
    }

  };

  render(){
    const { users } = this.state;
    const userObj = {...users[4]};
    
    return(
      <div className="header-container">
        <div className="title">
          <h1>
            Extend your business with a website
          </h1>
        </div>
        <div className="website-info">
          <h2>We aim to build your website for your business</h2>
          <h2>Gain more customers with a website</h2>
          <button onClick={this.getData}>Fetch</button>
          {
          users.slice(0, 1).map(user => (
            <Fragment key={user._id}>
              <h2>{userObj.date}</h2>
              <h2>{user.user_name}</h2>
              <h3>{user.user_email}</h3>
              <h3>{user.user_msg}</h3>
            </Fragment>
            ))
          }
        </div>
      </div>
    );

  }

}

export default Header;
