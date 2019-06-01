import React from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Container from './Container';
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
    this.state = {
      visible: false
    };
  }

  componentDidMount(){

  }

  componentWillUnmount(){

  }

  render() {

    return(
      <Router>
        <div className="app">
          
          <Container type="staticNavbar">
            <Navbar/>
            <div id="menu-root">
            </div>
          </Container>

          <Container>
            <div className="menu-portal"></div>
          </Container>

          <Switch>
            <Route exact path='/' component={Home} />
            <Container type="innerContent">
              <Route exact path='/contact' component={Contact} />
            </Container>
          </Switch>

          <Container>
            <Footer/>
          </Container>

        </div>
      </Router>

    // <div className="app">
    //   <header className="app-header">
    //     <img src={logo} className="app-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="app-link"
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
