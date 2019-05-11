import React from 'react';
import './Container.css';

// it is state component now
class Container extends React.Component{
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
      <h1>{this.props.containerValue}</h1>
      <h2>{this.state.counter},</h2>
      <button type="button" onClick={this.updateCounter}>Press to update state</button>
      </div>

    );

  }

}

export default Container;
