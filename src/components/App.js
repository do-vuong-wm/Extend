import React from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import Footer from './Footer';
// font awesome icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faBars);

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
  }

  componentWillUnmount(){
  }

  render() {
    return(
      <Router>
        <div className="App">
          <Navbar/>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/contact' component={Contact} />
            </Switch>
          <Footer/>
        </div>
      </Router>

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
