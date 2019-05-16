import React from 'react';
import './Header.css';

// it is state component now
class Header extends React.Component{
  // class constructor
  constructor(props){
    super(props);
    this.state = {counter: 0}; // component's data/object
    this.updateCounter = this.updateCounter.bind(this);
  }
  //lifecycle methods
  componentDidMount(){
    console.log("Mounting");
  }

  componentWillUnmount(){
    console.log("Unmounting");
  }
  //component's functions
  updateCounter(){
    let newCounter = this.state.counter + 1;
    this.setState({counter: newCounter});
  }

  render(){

    return(

      <div className="Container">
        <div className="Header">
          <div className="Title">
            <h1>
              Extend your business with a website
            </h1>
          </div>
          <div className="WebsiteInfo">
            <h2>We aim to build your website for your business</h2>
            <h2>Gain more customers with a website</h2>
          </div>
        </div>
      </div>

    );

  }

}

export default Header;
