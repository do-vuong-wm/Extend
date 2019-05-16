import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Services from './Services';
import About from './About';
import Footer from './Footer';

//let container =  {name: 'Hello World!'};

class App extends React.Component {
  render() {
    return(

      <div className="App">
        <Navbar/>
        <Header containerValue='Hello World!'/>
        <Services/>
        <About/>
        <Footer/>
      </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
  }
}

export default App;
